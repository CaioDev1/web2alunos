require('marko/node-require')
const express = require('express')
const markoExpress = require('marko/express')

const app = express()

app.use(markoExpress())
app.use(express.urlencoded(true))

const Dao = require('./dao/aluno-dao')
const alunos_dao = new Dao()

const flash = require('connect-flash')
const session = require('express-session')

app.use(session({
    secret: 'caio123',
    saveUninitialized: true,
    resave: true
}))
app.use(flash())


app.get('/', (req, res) => {

    let response = {
        error_message: req.flash('error'),
        success_message: req.flash('success'),
        results: []
    }

    alunos_dao.list.then(results => {
        response.results = results
        res.marko(require('./templates/alunos.marko'), response)
    }).catch(err => {
        console.log(err)
        response.error_message.push('Ocorreu algum erro no servidor')
        res.status(400).marko(require('./templates/alunos.marko'), response)
    })
})
app.get('/form', (req, res) => {
    res.marko(require('./templates/form.marko'))
})
app.get('/form/:id', (req, res) => {
    alunos_dao.findById(req.params.id).then(results => {
        if(results.length > 0) {
            res.marko(require('./templates/form.marko'), results[0])
        } else {
            console.log('Não foi encontrado nenhum aluno com esse ID.')
            req.flash('error', 'Não foi encontrado nenhum aluno com esse ID (' + req.params.id + ')')
            res.redirect('/')
        }
    }).catch(err => {
        console.log(err)
        req.flash('error', 'Erro ao achar o usuário.')
    })
})

app.post('/alunos', (req, res) => {
    if(req.body.id) {
        alunos_dao.update(req.body).then(() => {
            req.flash('success', 'Aluno atualizado com sucesso.')
            res.redirect('/')
        }).catch(err => {
            console.log(err)
            req.flash('error', 'Ocorreu um erro ao atualizar os dados do aluno.')
            res.redirect('/')
        })
    } else {
        alunos_dao.save(req.body).then(() => {
            req.flash('success', 'Aluno salvo com sucesso.')
            res.redirect('/')
        }).catch(err => {
            console.log(err)
            req.flash('error', 'Ocorreu um erro ao salvar os dados do aluno.')
            res.redirect('/')
        })
    }
})

app.get('/alunos/delete/:id', (req, res) => {
    alunos_dao.delete(req.params.id).then(() => {
        req.flash('success', 'Aluno removido com sucesso.')
        res.redirect('/')
    }).catch(err => {
        console.log(err)
        req.flash('error', 'Ocorreu um erro ao remover o aluno.')
        res.redirect('/')
    })
})

app.listen(3000, () => {
    console.log('server iniciado na porta 3000')
})
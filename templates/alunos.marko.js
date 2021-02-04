// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/web2-alunos$1.0.0/templates/alunos.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-BR><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><script src=https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js></script><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1 crossorigin=anonymous><script src=https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js></script><title>Alunos</title><style>\n        * {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        }\n\n        body {\n            display: flex;\n            flex-direction: column;\n\n            justify-content: center;\n            align-items: center;\n\n            width: 100vw;\n            height: 100vh;\n\n            text-align: center;\n\n            background-color: #0093E9;\n            background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);\n        }\n\n        h1, td, th {\n            color: white;\n        }\n\n        main {\n            width: 70%;\n        }\n\n        .toast {\n            position: absolute;\n\n            top: 50px;\n            right: 50px;\n        }\n    </style></head><body><main><h1>ALUNOS</h1><a href=/form class=\"btn btn-lg btn-warning col-3\">Novo</a><table class=table><thead><th scope=col>Id</th><th scope=col>Nome</th><th scope=col>Curso</th><th scope=col>Opções</th></thead>");

  var $for$0 = 0;

  marko_forOf(data.results, function(aluno, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td scope=row>" +
      marko_escapeXml(aluno.id) +
      "</td><td>" +
      marko_escapeXml(aluno.nome) +
      "</td><td>" +
      marko_escapeXml(aluno.curso) +
      "</td><td><a" +
      marko_attr("href", "/form/" + (aluno.id == null ? "" : aluno.id)) +
      " class=\"btn-sm btn-outline-success\">EDITAR</a> | <a" +
      marko_attr("href", "alunos/delete/" + (aluno.id == null ? "" : aluno.id)) +
      " class=\"btn-sm btn-outline-danger\">DELETAR</a></td></tr>");
  });

  out.w("</table>");

  var $for$1 = 0;

  marko_forOf(data.error_message, function(message, index) {
    out.w(" ");

    var $keyScope$1 = "[" + (($for$1++) + "]");

    out.w("<div class=toast role=alert aria-live=assertive aria-atomic=true><div class=toast-header><strong class=mr-auto>Alunos</strong></div><div class=toast-body style=\"background: red; color: white;\">" +
      marko_escapeXml(message) +
      "</div></div>");
  });

  var $for$2 = 0;

  marko_forOf(data.success_message, function(message, index) {
    out.w(" ");

    var $keyScope$2 = "[" + (($for$2++) + "]");

    out.w("<div class=toast role=alert aria-live=assertive aria-atomic=true><div class=toast-header><strong class=mr-auto>Alunos</strong></div><div class=toast-body style=\"background: green; color: white;\">" +
      marko_escapeXml(message) +
      "</div></div>");
  });

  out.w("</main><script>\n        $('.toast').toast({\n            animation: true,\n            autohide: true,\n            delay: 3000\n        })\n\n         $('.toast').toast('show')\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/web2-alunos$1.0.0/templates/alunos.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

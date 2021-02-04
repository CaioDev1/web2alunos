// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/web2-alunos$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-BR><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1 crossorigin=anonymous><title>Form</title><style>\n        * {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        }\n\n        body {\n            display: flex;\n            flex-direction: column;\n\n            justify-content: center;\n            align-items: center;\n\n            width: 100vw;\n            height: 100vh;\n\n            text-align: center;\n\n            background-color: #0093E9;\n            background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);\n\n        }\n\n        h1, td, th {\n            color: white;\n        }\n\n        input, select, button {\n            margin: 1% 0;\n            padding: 2% 0;\n        }\n\n        main {\n            width: 70%;\n        }\n    </style></head><body><main><h1>Cadastro</h1><form action=/alunos method=POST><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><input type=text name=nome id placeholder=Nome" +
    marko_attr("value", data.nome) +
    " class=form-control><input type=email name=email id placeholder=Email" +
    marko_attr("value", data.email) +
    " class=form-control><select name=curso id class=form-select><option value" +
    marko_attr("selected", data.curso == "") +
    " disabled></option><option value=ADS" +
    marko_attr("selected", data.curso == "ADSA") +
    ">Técnologo em ADS</option><option value=IPI" +
    marko_attr("selected", data.curso == "IPI") +
    ">Téc. em Informática para Internet</option><option value=QUA" +
    marko_attr("selected", data.curso == "QUA") +
    ">Téc. em Gestão de Qualidade</option></select><div class=\"d-grid gap-2\"><button type=reset class=\"btn btn-danger\">Cancelar</button><button type=submit class=\"btn btn-primary\">Salvar</button></div></form></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "22");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/web2-alunos$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

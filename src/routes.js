const express = require("express");
const EmpresaController = require("./controllers/EmpresaController");
const AtendimentoController = require("./controllers/AtendimentoController");

const routes = express.Router();

routes.get("/empresa", EmpresaController.listar);
routes.post("/empresa", EmpresaController.criar);
routes.get("/empresa/:cnpj", EmpresaController.visualizar);

routes.post("/empresa/:cnpj/atendimento", AtendimentoController.criar);
routes.get("/empresa/:cnpj/atendimento", AtendimentoController.listar);

module.exports = routes;

const express = require("express");
const EmpresaController = require("./controllers/EmpresaController");
const AtendimentoController = require("./controllers/AtendimentoController");

const routes = express.Router();

routes.get("/empresa", EmpresaController.listar);
routes.post("/empresa", EmpresaController.criar);
routes.get("/empresa/:empresa_id", EmpresaController.visualizar);
routes.get('/empresa/bancos', EmpresaController.listarBancos);


routes.post("/empresa/:empresa_id/atendimento", AtendimentoController.criar);
routes.get("/empresa/:empresa_id/atendimento", AtendimentoController.listar);

module.exports = routes;

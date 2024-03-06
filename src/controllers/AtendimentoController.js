const Empresa = require("../models/Empresas");
const Atendimento = require("../models/Atendimentos");

module.exports = {

  async criar(req, res) {
    const {cnpj, score, status, Anotacao } = req.body;

    console.log("AtendimentoController CRIAR Anotacao:"+Anotacao)

    const atendimento = await Atendimento.create({
      cnpj,
      score,
      status,
      Anotacao,
    });

    return res.json(atendimento);
  },


  async listar(req, res) {
    const { cnpj } = req.params;
    
    let atendimento = await Atendimento.find({ cnpj })

    return res.json(atendimento);
  }

  
};

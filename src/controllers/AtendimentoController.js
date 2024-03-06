const Empresa = require("../models/Empresas");
const Atendimento = require("../models/Atendimentos");

module.exports = {

  async criar(req, res) {
    const {cnpj, score, status, Anotacao } = req.body;

    // Verifica se a empresa existe
    const empresa = await Empresa.find(cnpj);
    if (!empresa) {
      return res.status(404).send({ error: "Empresa não encontrada" });
    }
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
    let atendimento = await Atendimento.find({ cnpj:cnpj })

    return res.json(atendimento);
  }

  
};

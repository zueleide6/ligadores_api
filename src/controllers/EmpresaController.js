const Empresa = require("../models/Empresas");
const Atendimento = require("../models/Atendimentos");

module.exports = {

  async criar(req, res) {
    const { nomeFantasia, banco, cnpj, abertura, porte, natJuridica, capSocial, tipo, situacao, email, telefones, municipio, estado, atividadePrincipal, quadroSocietario } = req.body;

    const empresaAtualizada = await Empresa.findOneAndUpdate({ cnpj }, {
      nomeFantasia,
      banco,
      abertura,
      porte,
      natJuridica,
      capSocial,
      tipo,
      situacao,
      email,
      telefones,
      municipio,
      estado,
      atividadePrincipal,
      quadroSocietario
    }, { new: true, upsert: true }); // Atualiza se existir, cria se não existir

    return res.json(empresaAtualizada);
  },
  async visualizar(req, res) {
    const { cnpj } = req.params;
    
    const empresa = await Empresa.findOne({ cnpj })
    
    if (!empresa) {
      return res.status(404).json({ error: "Empresa não encontrada" });
    }
    
    return res.json(empresa);
  },
  async listar(req, res) {

    const empresas = await Empresa.find()

    return res.json(empresas);
  }
  
};

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
      .populate({
        path: 'atendimentos',
        options: { sort: { 'data': -1 }, limit: 1 } // Apenas o mais recente atendimento
      })
      .lean();

    if (!empresa) {
      return res.status(404).json({ error: "Empresa não encontrada" });
    }

    // O atendimento mais recente estará disponível em `empresa.atendimentos[0]`, se existir
    const status = empresa.atendimentos?.length > 0 ? empresa.atendimentos[0].status : 'Não Disponível';
    const score = empresa.atendimentos?.length > 0 ? empresa.atendimentos[0]?.score || 'Não Disponível';

    // Atualize o objeto empresa com os novos campos para status e score
    empresa.status = status;
    empresa.score = score;

    return res.json(empresa);
  },
  async listar(req, res) {

    const empresas = await     Empresa.find().populate({
      path: 'atendimentos', // Assumindo que você tem uma referência aos atendimentos em seu modelo de Empresa
      options: { sort: { 'data': -1 } }, // Isso garante que o atendimento mais recente seja primeiro
      limit: 1 // Limita para apenas o atendimento mais recente
    })



    return res.json(empresas);
  }
  
};

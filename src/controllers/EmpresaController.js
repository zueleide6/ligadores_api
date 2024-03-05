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

const empresa = await Empresa.findOne({ cnpj }).lean(); // Use lean para eficiência, se você não precisar de um documento do Mongoose

      if (!empresa) {
        return res.status(404).json({ error: "Empresa não encontrada" });
      }

      // Buscar o atendimento mais recente para essa empresa
      const ultimoAtendimento = await Atendimento.findOne({ empresa: empresa._id })
        .sort({ data: -1 }) // Ordena por data decrescente, para obter o mais recente
        .lean(); // Use lean para eficiência

      // Adicionando o último atendimento ao objeto da empresa
      empresa.ultimoAtendimento = ultimoAtendimento;

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

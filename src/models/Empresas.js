const mongoose = require("mongoose");

const EmpresaSchema = {

  nomeFantasia: String,
  banco: String,
  cnpj: { type: String, unique: true, index: true },
  abertura:  Date,
  porte: String,
  natJuridica: String,
  capSocial: Number,
  tipo: String,
  situacao: String,
  email: String,
  telefones: String,
  municipio: String,
  estado: String,
  atividadePrincipal: String,
  quadroSocietario: String,
  atendimentos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Atendimento'
  }]
};

module.exports = mongoose.model("Empresa", EmpresaSchema);

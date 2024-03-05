const mongoose = require("mongoose");

const AtendimentoSchema = {
  data: { type: Date, default: Date.now, index: true },
  empresa: { type: mongoose.Schema.Types.ObjectId, ref: "Empresa", index: true },
  score: { type: Number, default: 0 },  
  status:{
    type: String,
    enum: ['Pendente','Retornar','Encaminhado','Sucesso','Perdido','Cadastro Incorreto','Não Possui Conta'],
    default: 'Pendente'
  },
  Anotacao: String,
};

module.exports = mongoose.model("Atendimento", AtendimentoSchema);
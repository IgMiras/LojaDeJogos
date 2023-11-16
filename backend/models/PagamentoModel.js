const mongoose = require('mongoose');

const PagamentoSchema = new mongoose.Schema({
    codigoNota: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
        enum: ['Boleto', 'Cartao', 'Pix'], // Enum para tipos de pagamento
    },
    numeroBoleto: {
        type: String,
        default: null,
    },
    nomeCartao: {
        type: String,
        default: null,
    },
    bandeiraCartao: {
        type: String,
        default: null,
    },
    numeroCartao: {
        type: String,
        default: null,
    },
    codigoPix: {
        type: String,
        default: null,
    },
});

const Pagamento = mongoose.model('pagamento', PagamentoSchema);

export default Pagamento;

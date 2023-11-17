const mongoose = require('mongoose');
const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
    },
    dataNasci: {
        type: Date,
    },
    endereco: {
        type: String,
    },
    cep: {
        type: String,
    },
    email: {
        type: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
    nivel: {
        type: Number,
        default: 0,
    },
    clienteEpico: {
        type: Boolean,
        default: false,
    },
});

const Cliente = mongoose.model('cliente', ClienteSchema);

module.exports = Cliente;

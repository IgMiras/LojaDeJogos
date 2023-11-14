const mongoose = require('mongoose');
const GerenteSchema = new mongoose.Schema({
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
    salario: {
        type: Number,
    },
    pis: {
        type: String,
    },
    dataAdmissao: {
        type: Date,
        default: Date.now,
    },
});

const Gerente = mongoose.model('gerente', GerenteSchema);

export default Gerente;

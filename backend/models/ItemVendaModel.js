const mongoose = require('mongoose');
const ItemVendaSchema = new mongoose.Schema({
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jogo',
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
});

const ItemVenda = mongoose.model('itemvenda', ItemVendaSchema);

module.exports = ItemVenda;

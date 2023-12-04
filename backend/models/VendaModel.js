const mongoose = require('mongoose');
const VendaSchema = new mongoose.Schema({
	cliente: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'cliente',
		required: true,
	},
	gerente: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'gerente',
		required: true,
	},
	dataVenda: {
		type: Date,
		default: Date.now,
	},
	dataEntrega: {
		type: Date,
	},
	itensVenda: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'jogo',
		},
	],

	// Sem possuiItensFisicos, pois eh so iterar por itensVenda

	valorTotal: {
		type: Number,
	},

	// Sem valorComDesconto, pois eh so tirar de valorTotal

	pagamento: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'pagamento',
	},
	transportadora: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'transportadora',
	},
});

const Venda = mongoose.model('venda', VendaSchema);

module.exports = Venda;

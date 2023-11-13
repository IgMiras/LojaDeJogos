import mongoose from 'mongoose';

const TransportadoraSchema = new mongoose.Schema({
	cnpj: {
		type: String,
		required: true,
	},
	nome: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	telefone: {
		type: String,
	},
	endereco: {
		type: String,
	},
	tempoEntrega: {
		// Em dias
		type: Number,
	},
});

const Transportadora = mongoose.model('transportadora', TransportadoraSchema);

export default Transportadora;

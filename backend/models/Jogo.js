import mongoose from 'mongoose';
const JogoSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	descricao: {
		type: String,
	},
	desenvolvedora: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'desenvolvedora',
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

const Jogo = mongoose.model('jogo', JogoSchema);

export default Jogo;

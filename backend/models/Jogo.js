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
	dataLancamento: {
		type: Date,
	},
	valor: {
		type: Number,
	},
	requisitosMinimos: {
		type: String,
	},
	avaliacao: {
		type: Number,
	},
	comentarios: {
		type: String,
	},
	disponivel: {
		type: Boolean,
	},
	tipoJogo: {
		type: String,
	},
});

const Jogo = mongoose.model('jogo', JogoSchema);

export default Jogo;

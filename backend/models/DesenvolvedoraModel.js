import mongoose from 'mongoose';
const DesenvolvedoraSchema = new mongoose.Schema({
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
	site: {
		type: String,
	},
	redeSocial: {
		type: String,
	},
	endereco: {
		type: String,
	},
});

const Desenvolvedora = mongoose.model('desenvolvedora', DesenvolvedoraSchema);

export default Desenvolvedora;

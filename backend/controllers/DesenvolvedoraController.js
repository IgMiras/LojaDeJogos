const DesenvolvedoraModel = require('../models/DesenvolvedoraModel.js');
const VendaModel = require('../models/VendaModel.js');

async function cadastrarDesenvolvedora(req, res) {
	const { cnpj, nome, email, site, redeSocial, endereco } = req.body;

	try {
		// Ver se a desenvolvedora ja existe
		let desenvolvedoraModel = await DesenvolvedoraModel.findOne({ nome });

		if (desenvolvedoraModel) {
			return res
				.status(400)
				.json({ errors: [{ msg: 'Desenvolvedora ja existente' }] });
		}

		// Criar nova desenvolvedora
		const desenvolvedoraFields = {};
		if (cnpj) desenvolvedoraFields.cnpj = cnpj;
		if (nome) desenvolvedoraFields.nome = nome;
		if (email) desenvolvedoraFields.email = email;
		if (site) desenvolvedoraFields.site = site;
		if (redeSocial) desenvolvedoraFields.redeSocial = redeSocial;
		if (endereco) desenvolvedoraFields.endereco = endereco;

		desenvolvedoraModel = new DesenvolvedoraModel(desenvolvedoraFields);

		await desenvolvedoraModel.save();
		res.status(200).json(desenvolvedoraModel);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de servidor');
	}
}

async function listarTodasDesenvolvedoras(req, res) {
	try {
		const desenvolvedoras = await DesenvolvedoraModel.find();
		res.json(desenvolvedoras);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de servidor');
	}
}

async function desenvolvedorasMaisJogosVendidos(req, res) {
	try {
		const desenvolvedoras = await VendaModel.aggregate([
			{
				$unwind: '$itensVenda',
			},
			{
				$lookup: {
					from: 'jogos',
					localField: 'itensVenda',
					foreignField: '_id',
					as: 'jogo',
				},
			},
			{
				$unwind: '$jogo',
			},
			{
				$lookup: {
					from: 'desenvolvedoras',
					localField: 'jogo.desenvolvedora',
					foreignField: '_id',
					as: 'desenvolvedora',
				},
			},
			{
				$unwind: '$desenvolvedora',
			},
			{
				$group: {
					_id: '$desenvolvedora._id',
					nome: { $first: '$desenvolvedora.nome' },
					numeroJogosVendidos: { $sum: 1 },
				},
			},
			{
				$sort: { numeroJogosVendidos: -1 },
			},
		]);

		res.json(desenvolvedoras);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de servidor');
	}
}

async function desenvolvedorasMaiorLucro(req, res) {
	try {
		const desenvolvedoras = await VendaModel.aggregate([
			{
				$unwind: '$itensVenda',
			},
			{
				$lookup: {
					from: 'jogos',
					localField: 'itensVenda',
					foreignField: '_id',
					as: 'jogo',
				},
			},
			{
				$unwind: '$jogo',
			},
			{
				$lookup: {
					from: 'desenvolvedoras',
					localField: 'jogo.desenvolvedora',
					foreignField: '_id',
					as: 'desenvolvedora',
				},
			},
			{
				$unwind: '$desenvolvedora',
			},
			{
				$group: {
					_id: '$desenvolvedora._id',
					nome: { $first: '$desenvolvedora.nome' },
					lucroTotal: { $sum: '$jogo.valor' },
				},
			},
			{
				$sort: { lucroTotal: -1 },
			},
		]);

		res.json(desenvolvedoras);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de servidor');
	}
}

module.exports = {
	cadastrarDesenvolvedora,
	listarTodasDesenvolvedoras,
	desenvolvedorasMaisJogosVendidos,
	desenvolvedorasMaiorLucro,
};

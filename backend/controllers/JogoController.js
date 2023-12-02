const Jogo = require('../classes/Jogo.js');
const Acao = require('../classes/Acao.js');
const Aventura = require('../classes/Aventura.js');
const Corrida = require('../classes/Corrida.js');
const Esporte = require('../classes/Esporte.js');
const RPG = require('../classes/RPG.js');
const DesenvolvedoraModel = require('../models/DesenvolvedoraModel.js');
const JogoModel = require('../models/JogoModel.js');
const FactoryJogo = require('../factory/FactoryJogo.js');
const {
	OrdenacaoStrategy,
	QuickSort,
	BubbleSort,
} = require('../strategy/OrdenacaoStrategy.js');

async function cadastrarJogo(req, res) {
	const {
		nome,
		descricao,
		nomeDesenvolvedora,
		dataLancamento,
		valor,
		requisitosMinimos,
		tipoJogo,
		disponivel,
		ehFisico,

		linkImagem,
	} = req.body;

	const jogo = FactoryJogo.factoryMethod(
		nome,
		descricao,
		nomeDesenvolvedora,
		dataLancamento,
		valor,
		requisitosMinimos,
		disponivel,
		ehFisico,
		tipoJogo
	);

	try {
		// Ver se a desenvolvedora existe
		const desenvolvedora = await DesenvolvedoraModel.findOne({
			nome: nomeDesenvolvedora,
		});

		if (!desenvolvedora) {
			return res.status(404).json({ msg: 'Desenvolvedora nao existente' });
		}

		// Preencher um objeto com os campos do jogo
		const jogosFields = {};
		if (nome) jogosFields.nome = nome;
		if (descricao) jogosFields.descricao = descricao;
		jogosFields.desenvolvedora = desenvolvedora.id; // Obrigatorio
		if (dataLancamento) jogosFields.dataLancamento = dataLancamento;
		if (valor) jogosFields.valor = jogo.valor; // Imposto calculado no construtor
		if (requisitosMinimos) jogosFields.requisitosMinimos = requisitosMinimos;
		if (typeof disponivel !== 'undefined') {
			jogosFields.disponivel = disponivel;
		}
		if (typeof ehFisico !== 'undefined') {
			jogosFields.ehFisico = ehFisico;
		}
		if (tipoJogo) jogosFields.tipoJogo = tipoJogo;
		if (linkImagem) jogosFields.linkImagem = linkImagem;

		// Ver se o jogo ja existe
		let jogoModel = await JogoModel.findOne({ nome });

		if (jogoModel) {
			return res.status(400).json({ msg: 'Jogo ja existente' });
		}

		// Criar novo jogo
		jogoModel = new JogoModel(jogosFields);

		await jogoModel.save();
		res.status(200).json(jogoModel);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarTodosJogos(req, res) {
	try {
		const jogos = await JogoModel.find().populate('desenvolvedora');
		res.json(jogos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarJogosAcao(req, res) {
	try {
		const jogos = await JogoModel.find({ tipoJogo: 'Acao' }).populate(
			'desenvolvedora'
		);
		res.json(jogos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarJogosAventura(req, res) {
	try {
		const jogos = await JogoModel.find({ tipoJogo: 'Aventura' }).populate(
			'desenvolvedora'
		);
		res.json(jogos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarJogosRPG(req, res) {
	try {
		const jogos = await JogoModel.find({ tipoJogo: 'RPG' }).populate(
			'desenvolvedora'
		);
		res.json(jogos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarJogosEsporte(req, res) {
	try {
		const jogos = await JogoModel.find({ tipoJogo: 'Esporte' }).populate(
			'desenvolvedora'
		);
		res.json(jogos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarJogosCorrida(req, res) {
	try {
		const jogos = await JogoModel.find({ tipoJogo: 'Corrida' }).populate(
			'desenvolvedora'
		);
		res.json(jogos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarDezJogosMaisCaros(req, res) {
	try {
		const jogos = await JogoModel.find()
			.populate('desenvolvedora')
			.sort({ valor: -1 })
			.limit(10);
		res.json(jogos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarDezJogosMaisBaratos(req, res) {
	try {
		const jogos = await JogoModel.find()
			.populate('desenvolvedora')
			.sort({ valor: 1 })
			.limit(10);
		res.json(jogos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarTodosJogosQuickSort(req, res) {
	try {
		const jogos = await JogoModel.find()
			.populate('desenvolvedora')
			.lean()
			.exec();
		const jogosArray = Array.from(jogos);
		const ordenacaoStrategy = new OrdenacaoStrategy();
		const quickSort = new QuickSort();
		ordenacaoStrategy.strategy = quickSort;
		console.log(ordenacaoStrategy);
		console.log(quickSort);
		ordenacaoStrategy.ordenar(jogosArray);

		res.json(jogosArray);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarTodosJogosBubbleSort(req, res) {
	try {
		const jogos = await JogoModel.find()
			.populate('desenvolvedora')
			.lean()
			.exec();
		const jogosArray = Array.from(jogos);
		const ordenacaoStrategy = new OrdenacaoStrategy();
		const bubbleSort = new BubbleSort();
		ordenacaoStrategy.strategy = bubbleSort;
		ordenacaoStrategy.ordenar(jogosArray);

		res.json(jogosArray);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

module.exports = {
	cadastrarJogo,
	listarTodosJogos,
	listarJogosAcao,
	listarJogosAventura,
	listarJogosRPG,
	listarJogosEsporte,
	listarJogosCorrida,
	listarDezJogosMaisCaros,
	listarDezJogosMaisBaratos,
	listarTodosJogosQuickSort,
	listarTodosJogosBubbleSort,
};

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth.js');

const {
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
	avaliarJogo,
} = require('../../controllers/JogoController.js');
const Jogo = require('../../models/JogoModel.js');

// @route   POST api/jogos
// @desc    Cadastrar um jogo
// @acess   Private
router.post(
	'/',
	[
		auth,
		[
			check('nomeDesenvolvedora', 'Nome da Desenvolvedora é obigatorio')
				.not()
				.isEmpty(),
		],
	],
	(req, res) => {
		const erros = validationResult(req);
		if (!erros.isEmpty()) {
			// Se tiver erros
			return res.status(400).json({ erros: erros.array() });
		}
		cadastrarJogo(req, res);
	}
);

// @route   GET api/jogos
// @desc    Listar todos os jogos cadastrados
// @acess   Private
router.get('/', auth, (req, res) => {
	listarTodosJogos(req, res);
});

// @route   GET api/jogos/acao
// @desc    Listar todos os jogos de acao
// @acess   Private
router.get('/acao', auth, (req, res) => {
	listarJogosAcao(req, res);
});

// @route   GET api/jogos/aventura
// @desc    Listar todos os jogos de aventura
// @acess   Private
router.get('/aventura', auth, (req, res) => {
	listarJogosAventura(req, res);
});

// @route   GET api/jogos/RPG
// @desc    Listar todos os jogos de RPG
// @acess   Private
router.get('/rpg', auth, (req, res) => {
	listarJogosRPG(req, res);
});

// @route   GET api/jogos/esporte
// @desc    Listar todos os jogos de esporte
// @acess   Private
router.get('/esporte', auth, (req, res) => {
	listarJogosEsporte(req, res);
});

// @route   GET api/jogos/corrida
// @desc    Listar todos os jogos de corrida
// @acess   Private
router.get('/corrida', auth, (req, res) => {
	listarJogosCorrida(req, res);
});

// @route   GET api/jogos/maiscaros
// @desc    Listar os 10 jogos mais caros
// @acess   Private
router.get('/maiscaros', auth, (req, res) => {
	listarDezJogosMaisCaros(req, res);
});

// @route   GET api/jogos/maisbaratos
// @desc    Listar os 10 jogos mais baratos
// @acess   Private
router.get('/maisbaratos', auth, (req, res) => {
	listarDezJogosMaisBaratos(req, res);
});

// @route   GET api/jogos/quicksort
// @desc    Listar os jogos ordenados com QuickSort
// @acess   Private
router.get('/quicksort', auth, (req, res) => {
	listarTodosJogosQuickSort(req, res);
});

// @route   GET api/jogos/bubblesort
// @desc    Listar os jogos ordenados com BubbleSort
// @acess   Private
router.get('/bubblesort', auth, (req, res) => {
	listarTodosJogosBubbleSort(req, res);
});

// @route   GET api/jogos/bubblesort
// @desc    Listar os jogos ordenados com BubbleSort
// @acess   Private
router.post('/bubblesort', auth, (req, res) => {
	listarTodosJogosBubbleSort(req, res);
});

// @route   POST api/jogos/avaliar
// @desc    Avaliar um jogo
// @acess   Private
router.post(
	'/avaliar',
	[
		auth,
		[
			check('nomeJogo', 'Nome do Jogo é obigatorio').not().isEmpty(),
			check('avaliacao', 'Avaliacao é obigatoria').not().isEmpty(),
		],
	],
	(req, res) => {
		const erros = validationResult(req);
		if (!erros.isEmpty()) {
			// Se tiver erros
			return res.status(400).json({ erros: erros.array() });
		}
		avaliarJogo(req, res);
	}
);

module.exports = router;

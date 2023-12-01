const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
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
} = require('../../controllers/JogoController.js');
const Jogo = require('../../models/JogoModel.js');

// @route   POST api/jogos
// @desc    Cadastrar um jogo
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
    '/',
    [
        check('nomeDesenvolvedora', 'Nome da Desenvolvedora é obigatorio')
            .not()
            .isEmpty(),
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
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/', (req, res) => {
    listarTodosJogos(req, res);
});

// @route   GET api/jogos/acao
// @desc    Listar todos os jogos de acao
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/acao', (req, res) => {
    listarJogosAcao(req, res);
});

// @route   GET api/jogos/aventura
// @desc    Listar todos os jogos de aventura
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/aventura', (req, res) => {
    listarJogosAventura(req, res);
});

// @route   GET api/jogos/RPG
// @desc    Listar todos os jogos de RPG
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/rpg', (req, res) => {
    listarJogosRPG(req, res);
});

// @route   GET api/jogos/esporte
// @desc    Listar todos os jogos de esporte
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/esporte', (req, res) => {
    listarJogosEsporte(req, res);
});

// @route   GET api/jogos/corrida
// @desc    Listar todos os jogos de corrida
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/corrida', (req, res) => {
    listarJogosCorrida(req, res);
});

// @route   GET api/jogos/maiscaros
// @desc    Listar os 10 jogos mais caros
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/maiscaros', (req, res) => {
    listarDezJogosMaisCaros(req, res);
});

// @route   GET api/jogos/maisbaratos
// @desc    Listar os 10 jogos mais baratos
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/maisbaratos', (req, res) => {
    listarDezJogosMaisBaratos(req, res);
});

// @route   GET api/jogos/quicksort
// @desc    Listar os jogos ordenados com QuickSort
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/quicksort', (req, res) => {
    listarTodosJogosQuickSort(req, res);
});

// @route   GET api/jogos/bubblesort
// @desc    Listar os jogos ordenados com BubbleSort
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/bubblesort', (req, res) => {
    listarTodosJogosBubbleSort(req, res);
});

module.exports = router;

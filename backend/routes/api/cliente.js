const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth.js');

const {
	cadastrarCliente,
	listarTodosClientes,
	listarTodosClientesEpicos,
	listarDezClientesMaiorNivel,
	historicoVendaClienteEspecifico,
} = require('../../controllers/ClienteController.js');

// @route   POST api/cliente
// @desc    Cadastrar um cliente
// @acess   Private
router.post(
	'/',
	[
		auth,
		[
			check('nome', 'Nome é obigatorio').not().isEmpty(),
			check('cpf', 'CPF é obigatorio').not().isEmpty(),
			check('rg', 'RG é obigatorio').not().isEmpty(),
		],
	],
	(req, res) => {
		const erros = validationResult(req);
		if (!erros.isEmpty()) {
			// Se tiver erros
			return res.status(400).json({ erros: erros.array() });
		}
		cadastrarCliente(req, res);
	}
);

// @route   GET api/cliente
// @desc    Listar todos clientes
// @acess   Private
router.get('/', auth, (req, res) => {
	listarTodosClientes(req, res);
});

// @route   GET api/cliente/epicos
// @desc    Listar todos clientes epicos cadastrados
// @acess   Private
router.get('/epicos', auth, (req, res) => {
	listarTodosClientesEpicos(req, res);
});

// @route   GET api/cliente/maiornivel
// @desc    Listar os 10 clientes com maior nivel
// @acess   Private
router.get('/maiornivel', auth, (req, res) => {
	listarDezClientesMaiorNivel(req, res);
});

// @route   POST api/cliente/historico
// @desc    Listar os 10 clientes com maior nivel
// @acess   Private
router.post(
	'/historico',
	[auth, [check('nome', 'Nome é obigatorio').not().isEmpty()]],
	(req, res) => {
		historicoVendaClienteEspecifico(req, res);
	}
);

module.exports = router;

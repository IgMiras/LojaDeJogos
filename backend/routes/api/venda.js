const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {
	cadastrarVenda,
	listarTodasVendas,
	listarVendasMesEspecificoLucro,
	vendasDesenvolvedoraMesELucro,
	listarVendasBoleto,
	listarVendasCartao,
	listarVendasPix,
} = require('../../controllers/VendaController.js');

// @route   POST api/venda
// @desc    Cadastrar uma venda
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
	'/',
	[
		check('nomeCliente', 'Nome do Cliente é obigatorio').not().isEmpty(),
		check('nomeGerente', 'Nome do Gerente é obigatorio').not().isEmpty(),
		check('itensVenda', 'itensVenda é obigatorio').not().isEmpty(),
	],
	(req, res) => {
		const erros = validationResult(req);
		if (!erros.isEmpty()) {
			// Se tiver erros
			return res.status(400).json({ erros: erros.array() });
		}
		cadastrarVenda(req, res);
	}
);

// @route   GET api/venda
// @desc    Listar todas vendas
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/', (req, res) => {
	listarTodasVendas(req, res);
});

// @route   POST api/venda/meslucro
// @desc    Listar todas vendas de um mes especifico e seu lucro
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
	'/meslucro',
	[
		check('mes', 'Mes é obigatorio').not().isEmpty(),
		check('ano', 'Ano é obigatorio').not().isEmpty(),
	],
	(req, res) => {
		listarVendasMesEspecificoLucro(req, res);
	}
);

// @route   POST api/venda/desenvolvedora
// @desc    Listar todas vendas de uma desenvolvedora em um mes especifico e seu lucro
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
	'/desenvolvedora',
	[
		check('mes', 'Mes é obigatorio').not().isEmpty(),
		check('ano', 'Ano é obigatorio').not().isEmpty(),
		check('nomeDesenvolvedora', 'Desenvolvedora é obigatorio').not().isEmpty(),
	],
	(req, res) => {
		vendasDesenvolvedoraMesELucro(req, res);
	}
);

// @route   GET api/venda/boleto
// @desc    Listar todas vendas em que o pagamento foi feito com boleto
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/boleto', (req, res) => {
	listarVendasBoleto(req, res);
});

// @route   GET api/venda/cartao
// @desc    Listar todas vendas em que o pagamento foi feito com cartao
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/cartao', (req, res) => {
	listarVendasCartao(req, res);
});

// @route   GET api/venda/pix
// @desc    Listar todas vendas em que o pagamento foi feito com pix
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/pix', (req, res) => {
	listarVendasPix(req, res);
});

module.exports = router;

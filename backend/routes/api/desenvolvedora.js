const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth.js');

const {
	cadastrarDesenvolvedora,
	listarTodasDesenvolvedoras,
	desenvolvedorasMaisJogosVendidos,
	desenvolvedorasMaiorLucro,
} = require('../../controllers/DesenvolvedoraController.js');

// @route   POST api/desenvolvedora
// @desc    Cadastrar uma desenvolvedora
// @acess   Private
router.post(
	'/',
	[
		auth,
		[
			check('cnpj', 'CNPJ é obigatorio').not().isEmpty(),
			check('nome', 'Nome é obigatorio'),
			check('email', 'Email é obigatorio'),
		],
	],
	(req, res) => {
		const erros = validationResult(req);
		if (!erros.isEmpty()) {
			// Se tiver erros
			return res.status(400).json({ erros: erros.array() });
		}
		cadastrarDesenvolvedora(req, res);
	}
);

// @route   GET api/desenvolvedora
// @desc    Listar todas desenvolvedoras
// @acess   Private
router.get('/', auth, (req, res) => {
	listarTodasDesenvolvedoras(req, res);
});

// @route   GET api/desenvolvedora/maisjogosvendidos
// @desc    Listar as desenvolvedoras que tiveram mais jogos vendidos
// @acess   Private
router.get('/maisjogosvendidos', auth, (req, res) => {
	desenvolvedorasMaisJogosVendidos(req, res);
});

// @route   GET api/desenvolvedora/maiorlucro
// @desc    Listar as desenvolvedoras que tiveram mais lucro
// @acess   Private
router.get('/maiorlucro', auth, (req, res) => {
	desenvolvedorasMaiorLucro(req, res);
});

module.exports = router;

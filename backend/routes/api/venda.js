const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { cadastrarVendda } = require('../../controllers/VendaController.js');

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
		cadastrarVendda(req, res);
	}
);

module.exports = router;

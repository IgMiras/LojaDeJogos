const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {
	cadastrarPagamento,
} = require('../../controllers/PagamentoController.js');

// @route   POST api/pagamento
// @desc    Cadastrar um pagamento
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
	'/',
	[check('tipo', 'Tipo do pagamento é obigatorio').not().isEmpty()],
	(req, res) => {
		const erros = validationResult(req);
		if (!erros.isEmpty()) {
			// Se tiver erros
			return res.status(400).json({ erros: erros.array() });
		}
		cadastrarPagamento(req, res);
	}
);

module.exports = router;

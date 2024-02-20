const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth.js');

const {
	cadastrarPagamento,
	listarTodosPagamentos,
} = require('../../controllers/PagamentoController.js');

// @route   POST api/pagamento
// @desc    Cadastrar um pagamento
// @acess   Private
router.post(
	'/',
	[auth, [check('tipo', 'Tipo do pagamento é obigatorio').not().isEmpty()]],
	(req, res) => {
		const erros = validationResult(req);
		if (!erros.isEmpty()) {
			// Se tiver erros
			return res.status(400).json({ erros: erros.array() });
		}
		cadastrarPagamento(req, res);
	}
);

// @route   GET api/pagamento
// @desc    Listar todos pagamento
// @acess   Private
router.get('/', auth, (req, res) => {
	listarTodosPagamentos(req, res);
});

module.exports = router;

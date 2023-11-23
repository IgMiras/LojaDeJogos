const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {
    cadastrarGerente,
    listarTodosGerentes,
} = require('../../controllers/GerenteController.js');

// @route   POST api/gerente
// @desc    Cadastrar um gerente
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
    '/',
    [
        check('nome', 'Nome é obigatorio').not().isEmpty(),
        check('cpf', 'CPF é obigatorio').not().isEmpty(),
        check('rg', 'RG é obigatorio').not().isEmpty(),
    ],
    (req, res) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            // Se tiver erros
            return res.status(400).json({ erros: erros.array() });
        }
        cadastrarGerente(req, res);
    }
);

// @route   Get api/gerente
// @desc    Listar todos gerentes
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.get('/', (req, res) => {
    listarTodosGerentes(req, res);
});

module.exports = router;

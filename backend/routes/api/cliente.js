const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { cadastrarCliente } = require('../../controllers/ClienteController.js');

// @route   POST api/cliente
// @desc    Cadastrar um cliente
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
        cadastrarCliente(req, res);
    }
);

module.exports = router;

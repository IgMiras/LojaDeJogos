const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {
    cadastrarTransportadora,
} = require('../../controllers/TransportadoraController.js');

// @route   POST api/transportadora
// @desc    Cadastrar uma transportadora
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
    '/',
    [
        check('cnpj', 'CNPJ é obigatorio').not().isEmpty(),
        check('nome', 'Nome é obigatorio').not().isEmpty(),
        check('email', 'Email é obigatorio').not().isEmpty(),
    ],
    (req, res) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            // Se tiver erros
            return res.status(400).json({ erros: erros.array() });
        }
        cadastrarTransportadora(req, res);
    }
);

module.exports = router;

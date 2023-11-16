const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {
    cadastrarDesenvolvedora,
} = require('../../controllers/DesenvolvedoraController.js');

const Desenvolvedora = require('../../models/DesenvolvedoraModel');

// @route   POST api/desenvolvedora
// @desc    Cadastrar uma desenvolvedora
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
    '/',
    [
        check('cnpj', 'CNPJ é obigatorio').not().isEmpty(),
        check('nome', 'Nome é obigatorio'),
        check('email', 'Email é obigatorio'),
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

module.exports = router;

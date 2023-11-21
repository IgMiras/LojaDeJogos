const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { cadastrarJogo } = require('../../controllers/JogoController.js');

// @route   POST api/jogos
// @desc    Cadastrar um jogo
// @acess   Publico (mudar futuramente caso tenha autenticação)
router.post(
    '/',
    [
        check('nomeDesenvolvedora', 'Nome da Desenvolvedora é obigatorio')
            .not()
            .isEmpty(),
    ],
    (req, res) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            // Se tiver erros
            return res.status(400).json({ erros: erros.array() });
        }
        cadastrarJogo(req, res);
    }
);

module.exports = router;

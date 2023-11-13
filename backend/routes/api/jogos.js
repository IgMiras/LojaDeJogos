import express from 'express';
const router = express.Router();
import { check, validationResult } from 'express-validator';
import { cadastrarJogo } from '../../controllers/JogoController.js';

import Jogo from '../../models/JogoModel.js';

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
        cadastrarJogo(req, res);
    }
);

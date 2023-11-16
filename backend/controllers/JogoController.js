const Jogo = require('../classes/Jogo.js');
const Acao = require('../classes/Acao.js');
const Aventura = require('../classes/Aventura.js');
const Corrida = require('../classes/Corrida.js');
const Esporte = require('../classes/Esporte.js');
const RPG = require('../classes/RPG.js');
const DesenvolvedoraModel = require('../models/DesenvolvedoraModel.js');
const JogoModel = require('../models/JogoModel.js');
const FactoryJogo = require('../factory/FactoryJogo.js');

async function cadastrarJogo(req, res) {
    const {
        nome,
        descricao,
        nomeDesenvolvedora,
        dataLancamento,
        valor,
        requisitosMinimos,
        disponivel,
        ehFisico,
        tipoJogo,
    } = req.body;

    const jogo = FactoryJogo.factoryMethod(
        nome,
        descricao,
        nomeDesenvolvedora,
        dataLancamento,
        valor,
        requisitosMinimos,
        disponivel,
        ehFisico,
        tipoJogo
    );

    try {
        const desenvolvedora = await DesenvolvedoraModel.findOne({
            nome: nomeDesenvolvedora,
        });

        if (!desenvolvedora) {
            return res
                .status(404)
                .json({ msg: 'Desenvolvedora nao existente' });
        }

        const jogosFields = {};
        if (nome) jogosFields.nome = nome;
        if (descricao) jogosFields.descricao = descricao;
        jogosFields.desenvolvedora = desenvolvedora.id; // Obrigatorio
        if (dataLancamento) jogosFields.dataLancamento = dataLancamento;
        if (valor) jogosFields.valor = jogo.valor; // Imposto calculado no construtor
        if (requisitosMinimos)
            jogosFields.requisitosMinimos = requisitosMinimos;
        if (typeof disponivel !== 'undefined') {
            jogosFields.disponivel = disponivel;
        }
        if (typeof ehFisico !== 'undefined') {
            jogosFields.ehFisico = ehFisico;
        }
        if (tipoJogo) jogosFields.tipoJogo = tipoJogo;

        let jogoModel = new JogoModel(jogosFields);

        await jogoModel.save();
        res.status(200).json(jogoModel);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de Servidor');
    }
}

module.exports = { cadastrarJogo };

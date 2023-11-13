import Jogo from '../classes/Jogo.js';
import Acao from '../classes/Acao.js';
import Aventura from '../classes/Aventura.js';
import Corrida from '../classes/Corrida.js';
import Esporte from '../classes/Esporte.js';
import RPG from '../classes/RPG.js';
import DesenvolvedoraModel from '../models/DesenvolvedoraModel.js';
import JogoModel from '../models/JogoModel.js';
import FactoryJogo from '../factory/FactoryJogo.js';

export default async function cadastrarJogo(req, res) {
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
        const desenvolvedora = await DesenvolvedoraModel.findOne(
            nomeDesenvolvedora
        );

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
        res.json(jogoModel);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de Servidor');
    }
}

import Jogo from '../classes/Jogo.js';
import Acao from '../classes/Acao.js';
import Aventura from '../classes/Aventura.js';
import Corrida from '../classes/Corrida.js';
import Esporte from '../classes/Esporte.js';
import RPG from '../classes/RPG.js';

export default class FactoryJogo {
    static factoryMethod(
        nome,
        descricao,
        nomeDesenvolvedora,
        dataLancamento,
        valor,
        requisitosMinimos,
        disponivel,
        ehFisico,
        tipoJogo
    ) {
        switch (tipoJogo.toLowerCase()) {
            case 'acao':
                return new Acao(
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
            case 'aventura':
                return new Aventura(
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
            case 'corrida':
                return new Corrida(
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
            case 'esporte':
                return new Esporte(
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
            case 'rpg':
                return new RPG(
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
        }
    }
}

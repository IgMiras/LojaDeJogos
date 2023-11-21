const Jogo = require('../classes/Jogo.js');
const Acao = require('../classes/Acao.js');
const Aventura = require('../classes/Aventura.js');
const Corrida = require('../classes/Corrida.js');
const Esporte = require('../classes/Esporte.js');
const RPG = require('../classes/RPG.js');

class FactoryJogo {
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
        if (tipoJogo === undefined) {
            return console.log('Tipo de jogo nao encontrado');
        }
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

module.exports = FactoryJogo;

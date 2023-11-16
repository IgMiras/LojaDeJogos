const Jogo = require('./Jogo.js');

class RPG extends Jogo {
    constructor(
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
        super(
            nome,
            descricao,
            nomeDesenvolvedora,
            dataLancamento,
            requisitosMinimos,
            disponivel,
            ehFisico,
            tipoJogo
        );
        this._valor = valor;
        this._valor = this.calcularValor();
    }

    calcularValor() {
        return this._valor * 1.0375;
    }
}

module.exports = RPG;

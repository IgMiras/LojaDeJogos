import Jogo from './Jogo.js';

export default class Corrida extends Jogo {
    constructor(
        codigo,
        nome,
        descricao,
        desenvolvedora,
        dataLancamento,
        valor,
        requisitosMinimos,
        disponivel
    ) {
        super(
            codigo,
            nome,
            descricao,
            desenvolvedora,
            dataLancamento,
            valor,
            requisitosMinimos,
            disponivel
        );
    }

    calcularValor() {
        return this._valor * 1.0725;
    }
}

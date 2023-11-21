const Pagamento = require('./Pagamento.js');

class Boleto extends Pagamento {
    constructor(codigoNota, numero) {
        super(codigoNota);
        this._numero = numero;
    }

    get numero() {
        return this._numero;
    }

    set numero(numero) {
        this._numero = numero;
    }

    gerarCodigoBoleto() {
        return Math.floor(Math.random() * 100);
    }
}

module.exports = Boleto;

const Pagamento = require('./Pagamento.js');

class Pix extends Pagamento {
    constructor(codigoNota, codigoPix) {
        super(codigoNota);
        this._codigoPix = codigoPix;
    }

    get codigoPix() {
        return this._codigoPix;
    }

    set codigoPix(codigoPix) {
        this._codigoPix = codigoPix;
    }

    gerarCodigoPix() {
        return Math.floor(Math.random() * 100);
    }
}

module.exports = Pix;

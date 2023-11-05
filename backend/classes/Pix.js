import Pagamento from './Pagamento';

export default class Pix {
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

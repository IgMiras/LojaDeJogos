import Pagamento from './Pagamento';

export default class CartaoCredito extends Pagamento {
	constructor(codigoNota, nome, bandeira, numero) {
		super(codigoNota);
		this._nome = nome;
		this._bandeira = bandeira;
		this._numero = numero;
	}

	get nome() {
		return this._nome;
	}

	set nome(nome) {
		this._nome = nome;
	}

	get bandeira() {
		return this._bandeira;
	}

	set bandeira(bandeira) {
		this._bandeira = bandeira;
	}

	get numero() {
		return this._numero;
	}

	set numero(numero) {
		this._numero = numero;
	}
}

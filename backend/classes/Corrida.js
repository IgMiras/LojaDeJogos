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
		disponivel,
		ehFisico,
		tipoJogo
	) {
		super(
			codigo,
			nome,
			descricao,
			desenvolvedora,
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
		return this._valor * 1.0725;
	}
}

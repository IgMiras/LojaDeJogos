export default class Jogo {
	constructor(
		codigo,
		nome,
		descricao,
		desenvolvedora,
		dataLancamento,
		valor,
		requisitosMinimos,
		disponivel,
		ehFisico
	) {
		this._codigo = codigo;
		this._nome = nome;
		this._descricao = descricao;
		this._desenvolvedora = desenvolvedora;
		this._dataLancamento = dataLancamento;
		this._valor = valor;
		this._requisitosMinimos = requisitosMinimos;
		this._disponivel = disponivel;
		this._ehFisico = ehFisico;
		this._avaliacao = 0;
		this._comentarios = [];
	}

	get codigo() {
		return this._codigo;
	}

	set codigo(codigo) {
		this._codigo = codigo;
	}

	get nome() {
		return this._nome;
	}

	set nome(nome) {
		this._nome = nome;
	}

	get descricao() {
		return this._descricao;
	}

	set descricao(descricao) {
		this._descricao = descricao;
	}

	get desenvolvedora() {
		return this._desenvolvedora;
	}

	set desenvolvedora(desenvolvedora) {
		this._desenvolvedora = desenvolvedora;
	}

	get dataLancamento() {
		return this._dataLancamento;
	}

	set dataLancamento(dataLancamento) {
		this._dataLancamento = dataLancamento;
	}

	get valor() {
		return this._valor;
	}

	set valor(valor) {
		this._valor = valor;
	}

	get requisitosMinimos() {
		return this._requisitosMinimos;
	}

	set requisitosMinimos(requisitosMinimos) {
		this._requisitosMinimos = requisitosMinimos;
	}

	get avaliacao() {
		return this._avaliacao;
	}

	set avaliacao(avaliacao) {
		this._avaliacao = avaliacao;
	}

	get comentarios() {
		return this._comentarios;
	}

	set comentarios(comentarios) {
		this._comentarios = comentarios;
	}

	get disponivel() {
		return this._disponivel;
	}

	set disponivel(disponivel) {
		this._disponivel = disponivel;
	}

	get ehFisico() {
		return this._ehFisico;
	}

	set ehFisico(ehFisico) {
		this._ehFisico = ehFisico;
	}
}

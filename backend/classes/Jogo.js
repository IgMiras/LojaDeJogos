export default class Jogo {
    constructor(
        nome,
        descricao,
        nomeDesenvolvedora,
        dataLancamento,
        requisitosMinimos,
        disponivel,
        ehFisico,
        tipoJogo
    ) {
        this._nome = nome;
        this._descricao = descricao;
        this._nomeDesenvolvedora = nomeDesenvolvedora;
        this._dataLancamento = dataLancamento;
        this._requisitosMinimos = requisitosMinimos;
        this._disponivel = disponivel;
        this._ehFisico = ehFisico;
        this._tipoJogo = tipoJogo;
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

    get nomeDesenvolvedora() {
        return this._desenvolvedora;
    }

    set nomeDesenvolvedora(nomeDesenvolvedora) {
        this._nomeDesenvolvedora = nomeDesenvolvedora;
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

    get tipoJogo() {
        return this._tipoJogo;
    }

    set tipoJogo(tipoJogo) {
        this._tipoJogo = tipoJogo;
    }
}

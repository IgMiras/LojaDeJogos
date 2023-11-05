export default class Venda {
    constructor(codigo, cliente, gerente, dataVenda,
                dataDaEntrega, itensVenda, possuiItensFisicos,
                valorTotal, valorComDesconto, formaPagamento,
                transportadora)
    {
        this._codigo = codigo
        this._cliente = cliente
        this._gerente = gerente
        this._dataVenda = dataVenda
        this._dataDaEntrega = dataDaEntrega
        this._itensVenda = itensVenda
        this._possuiItensFisicos = possuiItensFisicos
        this._valorTotal = valorTotal
        this._valorComDesconto = valorComDesconto
        this._formaPagamento = formaPagamento
        this._transportadora = transportadora
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(value) {
        this._codigo = value;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(value) {
        this._cliente = value;
    }

    get gerente() {
        return this._gerente;
    }

    set gerente(value) {
        this._gerente = value;
    }

    get dataVenda() {
        return this._dataVenda;
    }

    set dataVenda(value) {
        this._dataVenda = value;
    }

    get dataDaEntrega() {
        return this._dataDaEntrega;
    }

    set dataDaEntrega(value) {
        this._dataDaEntrega = value;
    }

    get itensVenda() {
        return this._itensVenda;
    }

    set itensVenda(value) {
        this._itensVenda = value;
    }

    get possuiItensFisicos() {
        return this._possuiItensFisicos;
    }

    set possuiItensFisicos(value) {
        this._possuiItensFisicos = value;
    }

    get valorTotal() {
        return this._valorTotal;
    }

    set valorTotal(value) {
        this._valorTotal = value;
    }

    get valorComDesconto() {
        return this._valorComDesconto;
    }

    set valorComDesconto(value) {
        this._valorComDesconto = value;
    }

    get formaPagamento() {
        return this._formaPagamento;
    }

    set formaPagamento(value) {
        this._formaPagamento = value;
    }

    get transportadora() {
        return this._transportadora;
    }

    set transportadora(value) {
        this._transportadora = value;
    }
}
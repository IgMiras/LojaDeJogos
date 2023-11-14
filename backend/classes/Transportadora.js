class Transportadora {
    constructor(codigo, cnpj, nome, email, telefone, endereco, tempoDeEntrega) {
        this._codigo = codigo;
        this._cnpj = cnpj;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._endereco = endereco;
        this._tempoDeEntrega = tempoDeEntrega;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(value) {
        this._codigo = value;
    }

    get cnpj() {
        return this._cnpj;
    }

    set cnpj(value) {
        this._cnpj = value;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get telefone() {
        return this._telefone;
    }

    set telefone(value) {
        this._telefone = value;
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(value) {
        this._endereco = value;
    }

    get tempoDeEntrega() {
        return this._tempoDeEntrega;
    }

    set tempoDeEntrega(value) {
        this._tempoDeEntrega = value;
    }
}

module.exports = Transportadora;

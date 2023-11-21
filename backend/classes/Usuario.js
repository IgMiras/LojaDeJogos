class Usuario {
    constructor(codigo, nome, cpf, rg, dataNascimento, endereco, cep, email) {
        this._codigo = codigo;
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._dataNascimento = dataNascimento;
        this._endereco = endereco;
        this._cep = cep;
        this._email = email;
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

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get rg() {
        return this._rg;
    }

    set rg(rg) {
        this._rg = rg;
    }

    get dataNascimento() {
        return this._dataNascimento;
    }

    set dataNascimento(dataNascString) {
        const data = Date.parse(dataNascString);
        this._dataNascimento = data;
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(endereco) {
        this._endereco = endereco;
    }

    get cep() {
        return this._cep;
    }

    set cep(cep) {
        this._cep = cep;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

module.exports = Usuario;

class Desenvolvedora {
    constructor(cnpj, nome, email, site, redeSocial, endereco) {
        this._cnpj = cnpj;
        this._nome = nome;
        this._email = email;
        this._site = site;
        this._redeSocial = redeSocial;
        this._endereco = endereco;
    }

    get cnpj() {
        return this._cnpj;
    }

    set cnpj(cnpj) {
        this._cnpj = cnpj;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get site() {
        return this._site;
    }

    set site(site) {
        this._site = site;
    }

    get redeSocial() {
        return this._redeSocial;
    }

    set redeSocial(redeSocial) {
        this._redeSocial = redeSocial;
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(endereco) {
        this._endereco = endereco;
    }
}

module.exports = Desenvolvedora;

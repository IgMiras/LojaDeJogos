const Usuario = require('./Usuario.js');

class Gerente extends Usuario {
    constructor(
        codigo,
        nome,
        cpf,
        rg,
        dataNascimento,
        endereco,
        cep,
        email,
        salario,
        pis,
        dataAdmissao
    ) {
        super(codigo, nome, cpf, rg, dataNascimento, endereco, cep, email);
        this._salario = salario;
        this._pis = pis;
        this._dataAdmissao = dataAdmissao;
    }

    get salario() {
        return this._salario;
    }

    set salario(salario) {
        this._salario = salario;
    }

    get pis() {
        return this._pis;
    }

    set pis(pis) {
        this._pis = pis;
    }

    get dataAdmissao() {
        return this._dataAdmissao;
    }

    set dataAdmissao(dataAdmissaoString) {
        const data = Date.parse(dataAdmissaoString);
        this._dataAdmissao = data;
    }
}

module.exports = Gerente;

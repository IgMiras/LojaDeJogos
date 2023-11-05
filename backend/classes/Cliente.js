import Usuario from './Usuario.js'

export default class Cliente extends Usuario {
    constructor(codigo, nome, cpf, rg, dataNascimento,
                endereco, cep, email, dataCadastro,
                nivel, clienteEpico)
    {
        super(codigo, nome, cpf, rg, dataNascimento,
              endereco, cep, email)
        this._dataCadastro = dataCadastro
        this._nivel = nivel
        this._clienteEpico = clienteEpico
    }

    get dataCadastro(){
        return this._dataCadastro
    }

    set dataCadastro(dataCadastroString){
        const data = Date.parse(dataCadastroString)
        this._dataCadastro = data
    }

    get nivel(){
        return this._nivel
    }

    set nivel(nivel){
        this._nivel = nivel
    }

    get clienteEpico(){
        return this._clienteEpico
    }

    set clienteEpico(clienteEpico){
        this._clienteEpico = clienteEpico
    }
}
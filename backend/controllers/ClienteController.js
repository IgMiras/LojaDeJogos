const ClienteModel = require('../models/ClienteModel.js');
const VendaModel = require('../models/VendaModel.js');
const {
    OrdenacaoStrategy,
    QuickSort,
    BubbleSort,
} = require('../strategy/OrdenacaoStrategy.js');

async function cadastrarCliente(req, res) {
    const { nome, cpf, rg, dataNasci, endereco, cep, email, clienteEpico } =
        req.body;

    try {
        // Ver se o cliente ja existe
        let clienteModel = await ClienteModel.findOne({ cpf });

        if (clienteModel) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Cliente ja existente' }] });
        }

        // Criar nova desenvolvedora
        const clienteFields = {};
        if (nome) clienteFields.nome = nome;
        if (cpf) clienteFields.cpf = cpf;
        if (rg) clienteFields.rg = rg;
        if (dataNasci) clienteFields.dataNasci = dataNasci;
        if (endereco) clienteFields.endereco = endereco;
        if (cep) clienteFields.cep = cep;
        if (email) clienteFields.email = email;
        if (typeof clienteEpico !== 'undefined') {
            clienteFields.clienteEpico = clienteEpico;
        }

        clienteModel = new ClienteModel(clienteFields);

        await clienteModel.save();
        res.status(200).json(clienteModel);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

async function listarTodosClientes(req, res) {
    try {
        let clientes = await ClienteModel.find();
        res.json(clientes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

async function listarTodosClientesEpicos(req, res) {
    try {
        const clientes = await ClienteModel.find({ clienteEpico: true });
        res.json(clientes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

async function listarDezClientesMaiorNivel(req, res) {
    try {
        const clientes = await ClienteModel.find()
            .sort({ nivel: -1 })
            .limit(10);
        res.json(clientes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

async function historicoVendaClienteEspecifico(req, res) {
    const { nome } = req.body;

    try {
        const cliente = await ClienteModel.findOne({ nome });
        if (!cliente) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Cliente nao encontrado' }] });
        }

        const vendas = await VendaModel.find({ cliente: cliente._id })
            .populate('cliente')
            .populate('gerente')
            .populate('transportadora')
            .exec();

        res.json(vendas);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

module.exports = {
    cadastrarCliente,
    listarTodosClientes,
    listarTodosClientesEpicos,
    listarDezClientesMaiorNivel,
    historicoVendaClienteEspecifico,
};

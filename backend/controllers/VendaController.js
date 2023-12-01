const VendaModel = require('../models/VendaModel.js');
const ItemVendaModel = require('../models/ItemVendaModel.js');
const ClienteModel = require('../models/ClienteModel.js');
const GerenteModel = require('../models/GerenteModel.js');
const ItemVenda = require('../models/ItemVendaModel.js');
const JogoModel = require('../models/JogoModel.js');

async function cadastrarVenda(req, res) {
	const {
		nomeCliente,
		nomeGerente,
		dataVenda,
		dataEntrega,
		itensVenda,
		formaPagamento,
		nomeTransportadora,
	} = req.body;

	try {
		// Ver se o cliente esta cadastrado
		const clienteModel = await ClienteModel.findOne({
			nome: nomeCliente,
		});

		if (!clienteModel) {
			return res.status(404).json({ msg: 'Cliente nao existente' });
		}

		// Ver se o gerente esta cadastrado
		const gerenteModel = await GerenteModel.findOne({
			nome: nomeGerente,
		});

		if (!gerenteModel) {
			return res.status(404).json({ msg: 'Gerente nao existente' });
		}

		// Preencher um objeto com os campos da venda
		const vendaFields = {};
		vendaFields.cliente = clienteModel.id; // Obrigatorio
		vendaFields.gerente = gerenteModel.id; // Obrigatorio
		if (dataVenda) vendaFields.dataVenda = dataVenda;
		if (dataEntrega) vendaFields.dataEntrega = dataEntrega;
		if (itensVenda) vendaFields.itensVenda = itensVenda; // Array de itemVenda
		for await (const itemVenda of itensVenda) {
			const jogoModel = await JogoModel.findOne({ nome: itemVenda.nomeJogo });
			vendaFields.valorTotal += jogoModel.valor;
		}
		if (clienteModel.clienteEpico) vendaFields.valorTotal *= 0.95; // Desconto de 5% para clientes epicos
		if (formaPagamento) vendaFields.formaPagamento = formaPagamento;
		if (nomeTransportadora) {
			// Ver se a transportadora existe
			const transportadoraModel = await TransportadoraModel.findOne({
				nome: nomeTransportadora,
			});

			if (!transportadoraModel) {
				return res.status(404).json({ msg: 'Transportadora nao existente' });
			}

			vendaFields.nomeTransportadora = transportadoraModel.id;
		}

		// Criar a venda
		const vendaModel = new VendaModel(vendaFields);

		await vendaModel.save();
		res.status(200).json(vendaModel);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

module.exports = { cadastrarVenda };
const VendaModel = require('../models/VendaModel.js');
const ItemVendaModel = require('../models/ItemVendaModel.js');
const ClienteModel = require('../models/ClienteModel.js');
const GerenteModel = require('../models/GerenteModel.js');
const ItemVenda = require('../models/ItemVendaModel.js');
const JogoModel = require('../models/JogoModel.js');
const TransportadoraModel = require('../models/TransportadoraModel.js');
const PagamentoModel = require('../models/PagamentoModel.js');
const DesenvolvedoraModel = require('../models/DesenvolvedoraModel.js');

async function cadastrarVenda(req, res) {
	const {
		nomeCliente,
		nomeGerente,
		dataVenda,
		dataEntrega,
		itensVenda,
		nomeTransportadora,
		idPagamento,
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
		let vendaFields = {};
		vendaFields.valorTotal = 0;
		vendaFields.cliente = clienteModel.id; // Obrigatorio
		vendaFields.gerente = gerenteModel.id; // Obrigatorio
		if (dataVenda) vendaFields.dataVenda = dataVenda;
		if (dataEntrega) vendaFields.dataEntrega = dataEntrega;

		if (itensVenda) {
			vendaFields.idItensVenda = [];
			await (async () => {
				const promises = itensVenda.map(async (itemVenda) => {
					const jogoModel = await JogoModel.findOne({
						nome: itemVenda,
					});

					const valorJogo = parseFloat(jogoModel.valor);
					if (!isNaN(valorJogo)) {
						// Se for um numero valido:
						vendaFields.valorTotal += valorJogo; // Soma ao valor total
					}
					vendaFields.idItensVenda.push(jogoModel.id);
				});

				// Aguarda a conclusão de todas as consultas
				await Promise.all(promises);
			})();
		}

		console.log('depois: ', vendaFields.idItensVenda);
		console.log(vendaFields.valorTotal);

		if (clienteModel.clienteEpico) vendaFields.valorTotal *= 0.95; // Desconto de 5% para clientes epicos
		if (idPagamento) {
			// Ver se o pagamento existe
			const pagamentoModel = await PagamentoModel.findById(idPagamento);

			if (!pagamentoModel) {
				return res.status(404).json({ msg: 'Pagamento nao existente' });
			}

			vendaFields.pagamento = pagamentoModel.id;
		}
		if (nomeTransportadora) {
			// Ver se a transportadora existe
			const transportadoraModel = await TransportadoraModel.findOne({
				nome: nomeTransportadora,
			});

			if (!transportadoraModel) {
				return res.status(404).json({ msg: 'Transportadora nao existente' });
			}

			vendaFields.transportadora = transportadoraModel.id;
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

async function listarTodasVendas(req, res) {
	try {
		const vendas = await VendaModel.find()
			.populate('cliente')
			.populate('gerente')
			.populate('transportadora')
			.exec();

		res.status(200).json(vendas);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarVendasMesEspecificoLucro(req, res) {
	const { mes, ano } = req.body;

	const dataInicio = new Date(ano, mes - 1, 1);
	const dataFim = new Date(ano, mes, 1);

	try {
		const vendas = await VendaModel.aggregate([
			{
				$match: {
					dataVenda: {
						$gte: dataInicio,
						$lt: dataFim,
					},
				},
			},
			{
				$group: {
					_id: null,
					totalVendas: { $sum: 1 },
					lucroTotal: { $sum: '$valorTotal' },
				},
			},
		]);

		res.json(vendas);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function vendasDesenvolvedoraMesELucro(req, res) {
	const { mes, ano, nomeDesenvolvedora } = req.body;

	const dataInicio = new Date(ano, mes - 1, 1);
	const dataFim = new Date(ano, mes, 1);

	try {
		const desenvolvedora = await DesenvolvedoraModel.findOne({
			nome: nomeDesenvolvedora,
		});

		if (!desenvolvedora) {
			return res.status(404).json({ msg: 'Desenvolvedora nao existente' });
		}

		const vendas = await VendaModel.aggregate([
			{
				$unwind: '$itensVenda',
			},
			{
				$lookup: {
					from: 'jogos',
					localField: 'itensVenda',
					foreignField: '_id',
					as: 'jogo',
				},
			},
			{
				$unwind: '$jogo',
			},
			{
				$match: {
					'jogo.desenvolvedora': desenvolvedora._id,
					dataVenda: {
						$gte: dataInicio,
						$lt: dataFim,
					},
				},
			},
			{
				$group: {
					_id: null,
					numeroJogosVendidos: { $sum: 1 },
					lucroTotal: { $sum: '$valorTotal' },
				},
			},
		]);

		res.json(vendas);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarVendasBoleto(req, res) {
	try {
		const vendas = await VendaModel.find()
			.populate({
				path: 'pagamento',
				match: { tipo: 'Boleto' },
			})
			.populate('cliente')
			.populate('gerente')
			.populate('transportadora')
			.exec();
		res.status(200).json(vendas);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarVendasCartao(req, res) {
	try {
		const vendas = await VendaModel.find()
			.populate({
				path: 'pagamento',
				match: { tipo: 'Cartao' },
			})
			.populate('cliente')
			.populate('gerente')
			.populate('transportadora')
			.exec();
		res.status(200).json(vendas);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

async function listarVendasPix(req, res) {
	try {
		const vendas = await VendaModel.find()
			.populate({
				path: 'pagamento',
				match: { tipo: 'Pix' },
			})
			.populate('cliente')
			.populate('gerente')
			.populate('transportadora')
			.exec();
		res.status(200).json(vendas);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

module.exports = {
	cadastrarVenda,
	listarTodasVendas,
	listarVendasMesEspecificoLucro,
	vendasDesenvolvedoraMesELucro,
	listarVendasBoleto,
	listarVendasCartao,
	listarVendasPix,
};

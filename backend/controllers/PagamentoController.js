const PagamentoModel = require('../models/PagamentoModel.js');

async function cadastrarPagamento(req, res) {
	const {
		codigoNota,
		tipo,
		numeroBoleto,
		nomeCartao,
		bandeiraCartao,
		numeroCartao,
		codigoPix,
	} = req.body;

	try {
		// Preencher um objeto com os campos da venda
		const pagamentoFields = {};
		pagamentoFields.codigoNota = codigoNota;

		if (tipo === undefined) {
			return res.status(400).json({ msg: 'Tipo de pagamento invalido' });
		}
		switch (tipo.toLowerCase()) {
			case 'boleto':
				pagamentoFields.tipo = tipo;
				pagamentoFields.numeroBoleto = numeroBoleto;
				break;
			case 'cartao':
				pagamentoFields.tipo = tipo;
				pagamentoFields.nomeCartao = nomeCartao;
				pagamentoFields.bandeiraCartao = bandeiraCartao;
				pagamentoFields.numeroCartao = numeroCartao;
				break;
			case 'pix':
				pagamentoFields.tipo = tipo;
				pagamentoFields.codigoPix = codigoPix;
				break;
			default:
				return res.status(400).json({ msg: 'Tipo de pagamento invalido' });
		}

		// Criar novo pagamento
		const pagamentoModel = new PagamentoModel(pagamentoFields);

		await pagamentoModel.save();
		res.status(200).json(pagamentoModel);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Erro de Servidor');
	}
}

module.exports = { cadastrarPagamento };
const VendaModel = require('../models/VendaModel.js');
const ItemVendaModel = require('../models/ItemVendaModel.js');
const ClienteModel = require('../models/ClienteModel.js');
const GerenteModel = require('../models/GerenteModel.js');
const ItemVenda = require('../models/ItemVendaModel.js');
const JogoModel = require('../models/JogoModel.js');
const TransportadoraModel = require('../models/TransportadoraModel.js');
const PagamentoModel = require('../models/PagamentoModel.js');

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
        if (itensVenda) vendaFields.itensVenda = itensVenda; // Array de itemVenda
        (async () => {
            for (const itemVenda of itensVenda) {
                console.log('itemVenda:');
                console.log(itemVenda);
                console.log(itemVenda.nome);
                const jogoModel = await JogoModel.findOne({
                    nome: itemVenda.nome,
                });
                console.log('jogoModel:');
                console.log(jogoModel);
                console.log(jogoModel.valor);
                vendaFields.valorTotal += parseFloat(jogoModel.valor);
            }
        })();
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
                return res
                    .status(404)
                    .json({ msg: 'Transportadora nao existente' });
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

module.exports = { cadastrarVenda };

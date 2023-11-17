const TransportadoraModel = require('../models/TransportadoraModel.js');

async function cadastrarTransportadora(req, res) {
    const { cnpj, nome, email, telefone, endereco, tempoEntrega } = req.body;

    try {
        // Ver se a transportadora ja existe
        let transportadoraModel = await TransportadoraModel.findOne({ cnpj });

        if (transportadoraModel) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Transportadora ja existente' }] });
        }

        // Criar nova transportadora
        const transportadoraFields = {};
        if (cnpj) transportadoraFields.cnpj = cnpj;
        if (nome) transportadoraFields.nome = nome;
        if (email) transportadoraFields.email = email;
        if (telefone) transportadoraFields.telefone = telefone;
        if (endereco) transportadoraFields.endereco = endereco;
        if (tempoEntrega) transportadoraFields.tempoEntrega = tempoEntrega;

        transportadoraModel = new TransportadoraModel(transportadoraFields);

        await transportadoraModel.save();
        res.status(200).json(transportadoraModel);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

module.exports = { cadastrarTransportadora };

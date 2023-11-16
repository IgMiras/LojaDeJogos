const DesenvolvedoraModel = require('../models/DesenvolvedoraModel.js');

async function cadastrarDesenvolvedora(req, res) {
    const { cnpj, nome, email, site, redeSocial, endereco } = req.body;

    try {
        // Ver se a desenvolvedora ja existe
        let desenvolvedora = await DesenvolvedoraModel.findOne({ nome });

        if (desenvolvedora) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Desenvolvedora ja existente' }] });
        }

        // Criar nova desenvolvedora
        const desenvolvedoraFields = {};
        if (cnpj) desenvolvedoraFields.cnpj = cnpj;
        if (nome) desenvolvedoraFields.nome = nome;
        if (email) desenvolvedoraFields.email = email;
        if (site) desenvolvedoraFields.site = site;
        if (redeSocial) desenvolvedoraFields.redeSocial = redeSocial;
        if (endereco) desenvolvedoraFields.endereco = endereco;

        let desenvolvedoraModel = new DesenvolvedoraModel(desenvolvedoraFields);

        await desenvolvedoraModel.save();
        res.status(200).json(desenvolvedoraModel);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

module.exports = { cadastrarDesenvolvedora };

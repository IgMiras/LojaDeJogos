const GerenteModel = require('../models/GerenteModel.js');

async function cadastrarGerente(req, res) {
    const { nome, cpf, rg, dataNasci, endereco, cep, email, salario, pis } =
        req.body;

    try {
        // Ver se o gerente ja existe
        let gerenteModel = await GerenteModel.findOne({ cpf });

        if (gerenteModel) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Gerente ja existente' }] });
        }

        // Criar novo gerente
        const gerenteFields = {};
        if (nome) gerenteFields.nome = nome;
        if (cpf) gerenteFields.cpf = cpf;
        if (rg) gerenteFields.rg = rg;
        if (dataNasci) gerenteFields.dataNasci = dataNasci;
        if (endereco) gerenteFields.endereco = endereco;
        if (cep) gerenteFields.cep = cep;
        if (email) gerenteFields.email = email;
        if (salario) gerenteFields.salario = salario;
        if (pis) gerenteFields.pis = pis;

        gerenteModel = new GerenteModel(gerenteFields);

        await gerenteModel.save();
        res.status(200).json(gerenteModel);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

async function listarTodosGerentes(req, res) {
    try {
        const gerentes = await GerenteModel.find();
        res.json(gerentes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

module.exports = { cadastrarGerente, listarTodosGerentes };

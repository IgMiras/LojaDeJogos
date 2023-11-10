import Jogo from '../classes/Jogo.js';
import Acao from '../classes/Acao.js';
import Aventura from '../classes/Aventura.js';
import Corrida from '../classes/Corrida.js';
import Esporte from '../classes/Esporte.js';
import RPG from '../classes/RPG.js';
import FactoryJogo from '../factory/FactoryJogo.js';

async function cadastrarJogo(req, res) {
	const {
		codigo,
		nome,
		descricao,
		desenvolvedora,
		dataLancamento,
		valor,
		requisitosMinimos,
		disponivel,
		ehFisico,
		tipoJogo,
	} = req.body;

	const jogo = FactoryJogo.factoryMethod(
		codigo,
		nome,
		descricao,
		desenvolvedora,
		dataLancamento,
		valor,
		requisitosMinimos,
		disponivel,
		ehFisico,
		tipoJogo
	);
}

const acao = new Acao(
	123,
	'aa',
	'asdasd',
	'sega',
	'2021-01-01',
	100,
	'asdasd',
	true,
	true,
	'acao'
);

console.log(acao);

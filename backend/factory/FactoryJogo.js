import Jogo from '../classes/Jogo.js';
import Acao from '../classes/Acao.js';
import Aventura from '../classes/Aventura.js';
import Corrida from '../classes/Corrida.js';
import Esporte from '../classes/Esporte.js';
import RPG from '../classes/RPG.js';

export default class FactoryJogo {
	static factoryMethod(
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
	) {
		switch (tipoJogo.toLowerCase()) {
			case 'acao':
				return new Acao(
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
			case 'aventura':
				return new Aventura(
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
			case 'corrida':
				return new Corrida(
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
			case 'esporte':
				return new Esporte(
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
			case 'rpg':
				return new RPG(
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
	}
}

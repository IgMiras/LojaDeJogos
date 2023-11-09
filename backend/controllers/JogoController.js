import Jogo from "../classes/Jogo.js";
import Acao from "../classes/Acao.js";
import Aventura from "../classes/Aventura.js";
import Corrida from "../classes/Corrida.js";
import Esporte from "../classes/Esporte.js";
import RPG from "../classes/RPG.js";

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
    } = req.body;
}

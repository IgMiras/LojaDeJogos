import { Footer } from '@/components/Footer/index';
import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '@/themes';
import Head from 'next/head';

import { TelaAvaliacao } from '@/components/TelaAvalicao/index.jsx';
import { Layout } from '@/components/Layout';

import Home from '.';

import { ListagemTodasDesenvolvedoras } from '@/components/ListagensDesenvolvedoras/TodasDesenvolvedoras';
import { ListagemTodasTransportadoras } from '@/components/Listagens/TodasTransportadoras';
import { CardCliente } from '@/components/Equipamentos/CardCliente';
import { ListagemTodosClientes } from '@/components/ListagensClientes/TodosClientes';
import { ListagemTodosGerentes } from '@/components/Listagens/TodosGerentes';
import { TelaCadastroJogos } from '@/components/TelasDeCadastro/CadastroJogo';
import { CardCarrinhoProduto } from '@/components/Equipamentos/CarrinhoCardProduto';
import { CardCarrinhoTransportadora } from '@/components/Equipamentos/CarrinhoCardTransportadora';
import { TelaNovaVenda } from '@/components/TelaVenda';
import Provider from '../../context/provider';
import { ListagemHitoricoClienteEspecifico } from '@/components/ListagensClientes/HistoricoClienteEspecifico';

export default function App({ Component, pageProps }) {
	// Verifica se a página atual é a página de login
	const isLoginPage = Component === Home;

	// Renderiza o layout padrão com header e footer, exceto na página de login
	const renderLayout = () => {
		if (isLoginPage) {
			return <Component {...pageProps} />;
		} else {
			return (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			);
		}
	};

	return (
		<ThemeProvider theme={customTheme}>
			<Head>
				<title>Loja de Jogos</title>

				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<meta name='robots' content='index, follow' />
				<meta property='og:image' content='/favicon.png' />
				<link rel='icon' href='/favicon.ico' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Provider>{renderLayout()}</Provider>
		</ThemeProvider>
	);
}

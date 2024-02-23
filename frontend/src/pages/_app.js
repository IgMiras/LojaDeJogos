import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { customTheme } from '@/themes';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import Home from '.';
import Register from './register';
import Provider from '../../context/provider';
import { useRouter } from 'next/router';
import useTokenVerification from '../hooks/useTokenVerification';

const client = new QueryClient();

export default function App({ Component, pageProps }) {
	const router = useRouter();

	useTokenVerification(router);

	// Verifica se a página atual é a página de login
	const isLoginOrRegisterPage = Component === Home || Component === Register;

	// Renderiza o layout padrão com header e footer, exceto na página de login
	const renderLayout = () => {
		if (isLoginOrRegisterPage) {
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
			<QueryClientProvider client={client}>
				<Head>
					<title>Loja de Jogos</title>

					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>

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
			</QueryClientProvider>
		</ThemeProvider>
	);
}

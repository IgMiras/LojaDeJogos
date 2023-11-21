import { Home } from "@/components/Home";
import { Layout } from "@/components/Layout";
import { SubHome1 } from "@/components/HomeSec01";
import "@/styles/globals.css";
import { SubHome2 } from "@/components/HomeSec02";
import { ThemeProvider } from "styled-components";
import { customTheme } from "@/themes";
import Head from "next/head";
import { CardProdutos } from "@/components/Equipamentos/CardProdutos";
import { Input } from "@/components/Equipamentos/Input";
import { TelaAvaliacao } from "@/components/TelaAvalicao";
import { CardListagem } from "@/components/Equipamentos/CardListagem";
import { ListarJogosCaros } from "@/components/DezJogosMaisCaros";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <title>Loja de Jogos</title>
        <meta
          name="description"
          content="Site desenvolvido para a matéria de Programação Orientada à Objeto - FCT Unesp 2023"
        />
        <meta
          name="keywords"
          content="jogos, vendas, transportadora, jogo, avaliação"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Site desenvolvido para a matéria de Programação Orientada à Objeto - FCT Unesp 2023"
        />

        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ListarJogosCaros />
      {/* <CardListagem /> */}
      {/* <TelaAvaliacao /> */}
      {/* <Input /> */}
      {/* <CardProdutos /> */}
      {/* <Layout>
        <Home />
        <SubHome1 />
        <SubHome2 />
      </Layout> */}
    </ThemeProvider>
  );
}

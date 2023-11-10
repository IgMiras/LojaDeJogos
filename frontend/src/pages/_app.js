import { Home } from "@/components/Home";
import { Layout } from "@/components/Layout";
import { SubHome1 } from "@/components/HomeSec01";
import "@/styles/globals.css";
import { SubHome2 } from "@/components/HomeSec02";
import { ThemeProvider } from "styled-components";
import { customTheme } from "@/themes";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <title>Grupo GV</title>
        <meta
          name="description"
          content="O GRUPO GV Consultoria Farmacêutica é uma empresa composta por duas áreas do segmento farmacêutico, uma empresa sendo de Consultoria e Assessoria Farmacêutica Magistral, e a outra, de Projetos e Equipamentos para abertura de Laboratório, Farmácia de Manipulação e Drogarias."
        />
        <meta
          name="keywords"
          content="consultoria farmacêutica, grupo GV, farmácia, equipamentos laboratoriais, manipulação, farmacêutico, drogaria, laboratório"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="canonical" href="https://www.grupogv.com/" /> */}
        <meta
          property="og:title"
          content="Grupo GV - Consultoria Farmacêutica"
        />
        <meta
          property="og:description"
          content="O GRUPO GV Consultoria Farmacêutica é uma empresa composta por duas áreas do segmento farmacêutico, uma empresa sendo de Consultoria e Assessoria Farmacêutica Magistral, e a outra, de Projetos e Equipamentos para abertura de Laboratório, Farmácia de Manipulação e Drogarias."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="/favicon.png" />
        {/* <meta property="og:url" content="https://www.grupogv.com/" /> */}
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <HomeLayout> */}
      {/* <HomeQuemSomos />
        <HomeValores /> */}
      {/* <ConsultoriaCursos /> */}
      <Home />
      {/* <CardProdutos /> */}
      {/* <ButtonCategoria texto="Lais" isSelected={isSelected} setIsSelected={setIsSelect} /> */}
      {/* <HeaderPesquisa /> */}
      {/* <ConsultoriaPalestras /> */}
      {/* </HomeLayout> */}
    </ThemeProvider>
  );
}

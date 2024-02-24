// import React from "react";
// import { Container, Content, Texto } from "./style";
// import axios from "axios";
// import { CardListagem } from "../Equipamentos/CardListagem/index";
// import { CardProdutos } from "../Equipamentos/CardProdutos/index";
import { CardListagemProdutos } from "../Equipamentos/CardListagemProdutos";
// import { render } from "react-dom";
// import RenderResult from "next/dist/server/render-result";

// const url = "http://localhost:5000/api/jogos";
// var data = "";
// function getJogos() {
//   axios
//     .get(url)
//     .then((response) => {
//       data = response.data;
//       console.log(data);
//       console.log("Terminou de executar a função");
//     })
//     .catch((error) => console.log(error));
// }
// getJogos();

// export const JogosDeAcao = () => {
//   const renderizando = data.map((item) => {
//     return (
//       <div>{item}</div>
//       // <CardListagemProdutos
//       //   titulo={item.nome}
//       //   desenvolvedora={item.desenvolvedora}
//       //   src={item.linkImagem}
//       // />
//     );
//   });
//   return (
//     <Container>
//       <a id="title">Jogos de Ação</a>
//       <Content>{renderizando}</Content>
//     </Container>
//   );
// };

import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";

import { PROD_API_URL } from "@/constants";

export const JogosDeAcao = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${PROD_API_URL}/jogos/acao`)
      .then((response) => {
        setData(response.data);
        console.log("Dados recebidos:", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderizando = data.map((item) => (
    <CardListagemProdutos
      titulo={item.nome}
      desenvolvedora={item.descricao}
      src={item.linkImagem}
    />
  ));

  return (
    <Container>
      <a id="title">Jogos de Ação</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

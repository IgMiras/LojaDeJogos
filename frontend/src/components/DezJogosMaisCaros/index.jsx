import { CardListagemProdutos } from "../Equipamentos/CardListagemProdutos";

import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardListagem } from "../Equipamentos/CardListagem";

import { PROD_API_URL } from "@/constants";

export const JogosMaisCaros = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${PROD_API_URL}/jogos/maiscaros`)
      .then((response) => {
        setData(response.data);
        console.log("Dados recebidos:", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderizando = data.map((item) => (
    <CardListagem
      titulo={item.nome}
      descricao={item.descricao}
      src={item.linkImagem}
      valor={item.valor}
    />
  ));

  return (
    <Container>
      <a id="title">10 Jogos Mais Caros</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

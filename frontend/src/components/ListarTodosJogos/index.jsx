import { CardListagemProdutos } from "../Equipamentos/CardListagemProdutos";
import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";

import { PROD_API_URL } from "@/constants";

export const TodosJogos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${PROD_API_URL}/jogos`)
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
      <a id="title">Todos Jogos Cadastrados</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

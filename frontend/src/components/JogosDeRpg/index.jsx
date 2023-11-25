import { CardListagemProdutos } from "../Equipamentos/CardListagemProdutos";

import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";

const url = "http://localhost:5000/api/jogos/rpg";

export const JogosDeRpg = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
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
      <a id="title">Jogos de RPG</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

import { CardListagemProdutos } from "../Equipamentos/CardListagemProdutos";

import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardListagem } from "../Equipamentos/CardListagem";

const url = "http://localhost:5000/api/jogos/maisbaratos";

export const JogosMaisBaratos = () => {
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
    <CardListagem
      titulo={item.nome}
      descricao={item.descricao}
      src={item.linkImagem}
      valor={item.valor}
    />
  ));

  return (
    <Container>
      <a id="title">10 Jogos Mais Baratos</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

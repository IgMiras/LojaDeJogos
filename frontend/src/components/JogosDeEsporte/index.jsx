import React from "react";
import { Container, Content, Texto } from "./style";
import Image from "next/image";
import img1 from "../../assets/images/Image1.png";
import { CardListagem } from "../Equipamentos/CardListagem/index";
import { CardProdutos } from "../Equipamentos/CardProdutos/index";
import { CardListagemProdutos } from "../Equipamentos/CardListagemProdutos";

export const JogosDeEsporte = () => {
  return (
    <Container>
      <a id="title">Jogos de Esporte</a>
      <Content></Content>
    </Container>
  );
};

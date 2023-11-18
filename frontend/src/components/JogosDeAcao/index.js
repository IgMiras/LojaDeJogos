import React from "react";
import { Container, Content, Texto } from "./style";
import Image from "next/image";
import img1 from "../../assets/images/Image1.png";
import { CardListagem } from "../Equipamentos/CardListagem";
import { CardProdutos } from "../Equipamentos/CardProdutos";

export const JogosDeAcao = () => {
  return (
    <Container>
      <a id="title">Jogos de Ação</a>
      <Content></Content>
    </Container>
  );
};

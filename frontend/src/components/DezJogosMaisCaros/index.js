import React from "react";
import { Container, Content, Texto } from "./style";
import Image from "next/image";
import img1 from "../../assets/images/Image1.png";
import { CardListagem } from "../Equipamentos/CardListagem";

export const ListarJogosCaros = () => {
  return (
    <Container>
      <a>Dez Jogos Mais Caros</a>
      <Content>
        <CardListagem />
        <CardListagem />
      </Content>
    </Container>
  );
};

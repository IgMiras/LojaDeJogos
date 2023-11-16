import React from "react";
import { Container, Content, Title } from "./style";
import Image from "next/image";
import stars from "../../assets/svg/stars.svg";
import { Input } from "../Equipamentos/Input";
const value = "";
export const TelaAvaliacao = () => {
  return (
    <Container>
      <Title>
        <Image id="img" src={stars} alt="Stars" />
        <h1>Avalie Seus jogos</h1>
      </Title>
      <Content>
        <Input
          type="text"
          name="titulo"
          id="titulo"
          placeHolder="Ex. God of War"
          label="Título"
        ></Input>
      </Content>
    </Container>
  );
};

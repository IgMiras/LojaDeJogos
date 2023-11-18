import React from "react";
import {
  BlocoInput,
  BlocoInput2,
  BlocoInput3,
  Container,
  Content,
  Title,
  First,
} from "./style";
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
        <First>
          <BlocoInput>
            <Input
              type="text"
              name="titulo"
              id="titulo"
              placeHolder="Ex. God of War"
              width="10%"
              height="auto"
              label="Título"
            ></Input>
          </BlocoInput>

          <BlocoInput2>
            <Input
              type="number"
              name="avalicao"
              id="avalicao"
              placeHolder="1 à 5"
              width="10%"
              height="auto"
              label="Avaliação:"
            ></Input>
          </BlocoInput2>
        </First>
        <BlocoInput3>
          <label htmlFor="comentarios">Comentários</label>
          <input
            type="texto"
            name="comentarios"
            placeholder="Ex: Escreva seu feedback sobre o jogo"
          ></input>
        </BlocoInput3>
      </Content>
    </Container>
  );
};

import React, { useState } from "react";
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
import { Input } from "../Equipamentos/Input/index";
import { Button } from "../Equipamentos/Button";
import { stringify } from "postcss";
import axios from "axios";

const url = "http://localhost:5000/api/jogos/avaliar";

export const TelaAvaliacao = () => {
  const [nomeJogo, setNomeJogo] = useState("");
  const [avaliacao, setAvaliacao] = useState();
  const [comentario, setComentario] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ nomeJogo, avaliacao, comentario });
    try {
      const resp = await axios.post(url, {
        nomeJogo: nomeJogo,
        avaliacao: parseInt(avaliacao),
        comentario: comentario,
      });
      console.log("aqui", resp.data);
      setNomeJogo("");
      setAvaliacao(0);
      setComentario("");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <Container>
      <Title>
        <Image id="img" src={stars} alt="Stars" />
        <h1>Avalie Seus jogos</h1>
      </Title>
      <Content>
        <First>
          <BlocoInput>
            <label>Nome do jogo</label>
            <Input
              type="text"
              name="titulo"
              id="titulo"
              placeHolder="Ex. God of War"
              width="100%"
              height="auto"
              value={nomeJogo}
              onChange={(e) => setNomeJogo(e.target.value)}
            ></Input>
          </BlocoInput>

          <BlocoInput2>
            <label>Avaliação</label>
            <Input
              type="number"
              name="avalicao"
              id="avalicao"
              placeHolder="1 à 5"
              width="100%"
              height="auto"
              value={avaliacao}
              onChange={(e) => setAvaliacao(e.target.value)}
            ></Input>
          </BlocoInput2>
        </First>
        <BlocoInput3>
          <label>Comentários</label>
          <Input
            type="text"
            name="comentario"
            id="comentario"
            placeHolder="Escreva o que você achou do jogo..."
            width="100%"
            height="100px"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          ></Input>
        </BlocoInput3>
        <div id="button">
          <Button onClick={handleSubmit} height="40px">
            <a>Enviar</a>
          </Button>
        </div>
      </Content>
    </Container>
  );
};

import React from "react";
import { Container, Content, Texto } from "./style";
import Image from "next/image";
import img1 from "../../assets/images/image1.png";

export const SubHome1 = () => {
  return (
    <Container>
      <Content>
        <Image id="img" src={img1} alt="Girl playing a videogame" />
        <Texto>
          <h1 id="title">Amplo catálogo</h1>
          <span id="sub">
            Oferecemos jogos de diversos gêneros, garantindo que haja algo para
            todos os gostos e preferências. Desde ação empolgante até aventuras
            envolventes, temos uma ampla seleção de títulos para atender às suas
            necessidades de entretenimento
          </span>
        </Texto>
      </Content>
    </Container>
  );
};

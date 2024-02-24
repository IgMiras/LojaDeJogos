import React from "react";
import { Container, Content, Texto } from "./style";
import Image from "next/image";
import img2 from "../../assets/images/image2.png";

export const SubHome2 = () => {
  return (
    <Container>
      <Content>
        <Texto>
          <h1 id="title">Suba de nível!</h1>
          <span id="sub">
            Oferecemos classificações e níveis exclusivos para nossos clientes.
            Quanto mais você joga e avalia os jogos, mais alto seu nível sobe.
            Isso não apenas torna sua experiência mais gratificante, mas também
            desbloqueia vantagens e recompensas especiais ao longo do caminho
          </span>
        </Texto>
        <Image id="img" src={img2} alt="Girl playing a videogame" />
      </Content>
    </Container>
  );
};

import React from "react";
import { Content, Container } from "./style";

export const HomeComponent = () => {
  return (
    <Container>
      <Content>
        <span id="title">Descubra, Jogue, Surpreenda-se</span>
        <span id="sub">
          Com uma seleção diversificada de jogos eletrônicos de alta qualidade.
          Descubra títulos emocionantes, desfrute da ação e surpreenda-se com
          ofertas exclusivas. A diversão nunca foi tão acessível.
        </span>
      </Content>
    </Container>
  );
};

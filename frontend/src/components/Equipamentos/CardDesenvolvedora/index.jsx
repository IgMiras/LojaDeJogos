import React, { Children } from "react";

import { Container, Description, Title, Content } from "./style";

export const CardDesenvolvedora = ({
  nome,
  cnpj,
  email,
  site,
  redes,
  endereco,
}) => {
  return (
    <Container>
      <Content>
        <Title>{nome}</Title>
        <Description>
          <a id="cnpj">{cnpj}</a>
          <a id="email">{email}</a>
          <a id="site">{site}</a>
          <a id="redeSocial">{redes}</a>
          <a id="endereco">{endereco}</a>
        </Description>
      </Content>
    </Container>
  );
};

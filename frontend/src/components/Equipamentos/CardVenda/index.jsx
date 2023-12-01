import React, { Children } from "react";
import Image from "next/image";

import clienteImage from "../../../assets/svg/carrinho.svg";
import { Container, Content, Description, DivImage, Title } from "./style";

export const CardVenda = ({
  codigoVenda,
  nomeTransportadora,
  dataVenda,
  cliente,
  gerente,
  valor,
  tipoPagamento,
}) => {
  return (
    <Container>
      <DivImage>
        <Image id="img" src={clienteImage} alt="Logo da loja de jogos" />
      </DivImage>
      <Content>
        <Title>
          <h1>Venda {codigoVenda} </h1>
        </Title>
        <Description>
          <a id="dataNasc">Transportadora {nomeTransportadora}</a>
          <a id="endereco">Data venda: {dataVenda} </a>
          <a>Cliente: {cliente}</a>
          <a>Gerente: {gerente}</a>
          <a id="cep">Valor R${valor} </a>
          <a id="email">Pago via {tipoPagamento}</a>
        </Description>
      </Content>
    </Container>
  );
};

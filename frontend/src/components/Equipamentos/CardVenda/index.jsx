import React, { Children } from "react";
import Image from "next/image";
import { format } from "date-fns";

import clienteImage from "../../../assets/svg/carrinho.svg";
import { Container, Content, Description, DivImage, Title } from "./style";

export const CardVenda = ({
  codigoVenda,
  nomeTransportadora,
  dataVenda,
  cliente,
  gerente,
  valor,
  itensVenda,
}) => {
  const data = new Date(dataVenda);
  const dataFormatada = format(data, "dd/MM/yyyy");
  const valorFormatado = valor.toFixed(2);

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
          <a id="dataNasc">
            {nomeTransportadora !== undefined
              ? `Transportadora: ${nomeTransportadora}`
              : ""}
          </a>
          <a id="endereco">Data venda: {dataFormatada} </a>
          <a>Cliente: {cliente}</a>
          <a>Gerente: {gerente}</a>
          <a id="cep">Valor R${valorFormatado} </a>
          {/* <div id="itens">{renderizando}</div> */}
        </Description>
      </Content>
    </Container>
  );
};

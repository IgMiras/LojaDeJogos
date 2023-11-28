import React, { Children } from "react";
import Image from "next/image";

import clienteImage from "../../../assets/images/clientImage.png";
import { Container, Content, Description, DivImage, Title } from "./style";

export const CardCliente = ({
  nome,
  cpf,
  rg,
  dataNasci,
  endereco,
  cep,
  email,
  epico,
}) => {
  return (
    <Container>
      <DivImage>
        <Image id="img" src={clienteImage} alt="Logo da loja de jogos" />
      </DivImage>
      <Content>
        <Title>
          <h1>{nome}</h1>
        </Title>
        <Description>
          <div id="separator">
            <a id="cpf">CPF: {cpf}</a>
            <a id="rg">RG: {rg}</a>
          </div>
          <a id="dataNasc">{dataNasci}</a>
          <a id="endereco">{endereco} </a>
          <a id="cep">{cep} </a>
          <a id="email">{email}</a>
          <p>
            CLIENTE {epico ? "ÉPICO" : "NÃO ÉPICO"}
            {console.log(epico)}
          </p>
        </Description>
      </Content>
    </Container>
  );
};

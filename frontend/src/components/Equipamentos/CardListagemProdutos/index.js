import React from "react";
import Image from "next/image";

import { Button } from "../Button";

import ProductImage from "../../../assets/images/gameImg.png";

import { Container, Description, DivImage } from "./style";

export const CardListagemProdutos = () => {
  return (
    <Container>
      <DivImage>
        <Image
          id="productImage"
          src={ProductImage}
          alt="Picture of the author"
        />
      </DivImage>
      <Description>
        <a id="titulo">God of wars</a>
        <a id="sub">
          <strong>DESENVOLVEDORA: </strong> Sony Interactive Entertainment (SIE)
        </a>
      </Description>
    </Container>
  );
};

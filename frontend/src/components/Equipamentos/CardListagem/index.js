import React, { Children } from "react";
import Image from "next/image";

import { Button } from "../Button";

import ProductImage from "../../../assets/images/gameImg.png";

import { Container, Description, DivImage } from "./style";

export const CardListagem = ({ titulo, desenvolvedora, valor }) => {
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
        <a id="titulo">{titulo}</a>
        <a id="sub">
          <strong>DESENVOLVEDORA: </strong> {desenvolvedora}
        </a>
        <a id="value">{valor}</a>
      </Description>
    </Container>
  );
};

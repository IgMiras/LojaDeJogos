import React, { Children } from "react";
import Image from "next/image";

import { Button } from "../Button/index";

import ProductImage from "../../../assets/images/gameImg.png";

import { Container, Description, DivImage } from "./style";

export const CardListagem = ({ titulo, descricao, valor, src }) => {
  return (
    <Container>
      <DivImage>
        <Image
          loader={() => src}
          src={src}
          width={400}
          height={400}
          // fill={true}
          id="productImage"
          alt="Picture of the author"
        />
      </DivImage>
      <Description>
        <a id="titulo">{titulo}</a>
        <a id="sub">{descricao}</a>
        <a id="value">R${valor}</a>
      </Description>
    </Container>
  );
};

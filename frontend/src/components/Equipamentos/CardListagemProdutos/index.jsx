import React from "react";
import Image from "next/image";

import { Button } from "../Button/index";

import ProductImage from "../../../assets/images/gameImg.png";

import { Container, Description, DivImage } from "./style";

export const CardListagemProdutos = ({ titulo, desenvolvedora, src }) => {
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
        {/* <Image
          fill={true}
          id="productImage"
          src={src}
          alt="Picture of the author"
        /> */}
      </DivImage>
      <Description>
        <a id="titulo">{titulo}</a>
        <a id="sub">{desenvolvedora}</a>
      </Description>
    </Container>
  );
};

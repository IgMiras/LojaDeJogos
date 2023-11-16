import React from "react";
import Image from "next/image";

import { Button } from "../Button";

import ProductImage from "../../../assets/images/gameImg.png";

import { Container, Description, DivImage } from "./style";

export const CardProdutos = () => {
  const background = "rgba(78, 193, 229, 1)";
  const color = "";
  const activeBackground = "rgba(78, 193, 229, 1)";
  const height = "35px";
  function saudacao() {
    alert("Bom dia!");
  }

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
        <div id="button">
          <Button
            background={background}
            color={color}
            activeBackground={activeBackground}
            onClick={saudacao}
            height={height}
          >
            <a>Adicionar</a>
          </Button>
        </div>
      </Description>
    </Container>
  );
};

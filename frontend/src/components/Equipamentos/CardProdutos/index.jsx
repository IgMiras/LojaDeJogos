import React from "react";
import Image from "next/image";

import { Button } from "../Button/index";

import ProductImage from "../../../assets/images/gameImg.png";

import { Container, Description, DivImage } from "./style";

export const CardProdutos = ({ titulo, desenvolvedora, src }) => {
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
        {/* <Image id="productImage" src={src} alt="Picture of the author" /> */}
      </DivImage>
      <Description>
        <a id="titulo">{titulo}</a>
        <a id="sub">
          <strong>DESENVOLVEDORA: </strong> {desenvolvedora}
        </a>
        <div id="button">
          <Button onClick={saudacao} height={height}>
            <a>Adicionar</a>
          </Button>
        </div>
      </Description>
    </Container>
  );
};

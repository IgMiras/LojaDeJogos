import React, { useContext } from "react";
import Image from "next/image";

import { Button } from "../Button/index";

import ProductImage from "../../../assets/images/gameImg.png";

import { Container, Description, DivImage } from "./style";
import AppContext from "../../../../context/context";

export const CardProdutos = ({ titulo, desenvolvedora, src, item }) => {
  const height = "35px";
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = (item) => {
    setCartItems([...cartItems, item]);
  };

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
        <a id="sub">
          <strong>DESENVOLVEDORA: </strong> {desenvolvedora}
        </a>
        <div id="button">
          <Button onClick={() => handleAddCart(item)} height={height}>
            <a>Adicionar</a>
          </Button>
        </div>
      </Description>
    </Container>
  );
};

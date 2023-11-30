import Image from "next/image";
import clienteImage from "../../../assets/images/gameImg.png";

import { useState } from "react";
import { ButtonQuant, Container, Description, DivImage, Valor } from "./style";
import { useQuantidade } from "../../../../context/quantContext";

export const CardCarrinhoProduto = ({
  id,
  src,
  nomeJogo,
  nomeDesenvolvedora,
  tipoJogo,
  valor,
}) => {
  const { getQuantidade, incrementarQuantidade, decrementarQuantidade } =
    useQuantidade();
  const quantidade = getQuantidade(id);

  const handleIncrement = () => {
    incrementarQuantidade(id);
  };

  const handleDecrement = () => {
    decrementarQuantidade(id);
  };

  return (
    <Container>
      <DivImage>
        <Image
          loader={() => src}
          src={src}
          width={400}
          height={400}
          id="productImage"
          alt="Picture of the author"
        />
      </DivImage>
      <Description>
        <a id="titulo">{nomeJogo}</a>
        <a id="sub">{`DESENVOLVEDORA: ${nomeDesenvolvedora}`}</a>
        <a id="sub">{`CATEGORIA: ${tipoJogo}`}</a>
      </Description>
      <Valor>
        <a id="value">{valor !== undefined ? `R$${valor}` : "Grátis"}</a>
      </Valor>
      <ButtonQuant>
        <button id="decrement" onClick={handleDecrement}>
          -
        </button>

        <input
          type="number"
          id="item_quantity"
          placeholder="0"
          value={quantidade}
          readOnly
        />

        <button id="increment" onClick={handleIncrement}>
          +
        </button>
      </ButtonQuant>
    </Container>
  );
};

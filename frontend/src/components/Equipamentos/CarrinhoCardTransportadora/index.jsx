import Image from "next/image";
import caminhaoImage from "../../../assets/svg/caminhao.svg";
import { Container, Description, DivImage } from "./style";

export const CardCarrinhoTransportadora = ({
  nomeTransportadora,
  tempoEntrega,
}) => {
  return (
    <Container>
      <DivImage>
        <Image
          src={caminhaoImage}
          width={400}
          height={400}
          // fill={true}
          id="productImage"
          alt="Picture of the author"
        />
      </DivImage>
      <Description>
        <a id="titulo">{nomeTransportadora}</a>
        <a id="sub">
          <strong>TEMPO DE ENTREGA: </strong> {`${tempoEntrega} dias`}
        </a>
      </Description>
    </Container>
  );
};

import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardVenda } from "@/components/Equipamentos/CardVenda";

const url = "http://localhost:5000/api/venda/pix";

export const ListagemVendasPix = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log("Dados recebidos:", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderizando = data.map((item) => (
    <CardVenda
      codigoVenda={item.codigoVenda}
      nomeTransportadora={item.nomeTransportadora}
      dataVenda={item.dataVenda}
      cliente={item.cliente}
      gerente={item.gerente}
      valor={item.valorTotal}
      itensVenda={item.itensVenda}
    />
  ));

  return (
    <Container>
      <a id="title">Vendas pagas em PIX</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

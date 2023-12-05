import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardVenda } from "@/components/Equipamentos/CardVenda";

const url = "http://localhost:5000/api/venda/boleto";

export const ListagemVendasBoleto = () => {
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
      codigoVenda={""}
      nomeTransportadora={
        item.transportadora ? item.transportadora.nome : "Sem transportadora"
      }
      dataVenda={item.dataVenda}
      cliente={item.cliente.nome}
      gerente={item.gerente.nome}
      valor={item.valorTotal.toFixed(2)}
      itensVenda={item.itensVenda}
    />
  ));

  return (
    <Container>
      <a id="title">Vendas pagas em Boleto</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};
{
  /* <CardVenda
codigoVenda={"12345"}
nomeTransportadora={"Ubisoft"}
dataVenda={"22/11/2023"}
cliente={"Laís Sousa"}
gerente={"Igor Miras"}
valor={"200,00"}
tipoPagamento={"Boleto"}
/> */
}

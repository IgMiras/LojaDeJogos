import React, { useState, useEffect } from "react";
import { Container, Content, Info } from "./style";
import axios from "axios";
import { CardVenda } from "@/components/Equipamentos/CardVenda";

const url = "http://localhost:5000/api/venda/meslucro";

export const ListagemVendasMes = () => {
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
      <a id="title">Vendas por mês</a>
      <Info>
        {/* <label for="mes">Mês</label> */}
        <select id="mes" name="mes">
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>
      </Info>
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

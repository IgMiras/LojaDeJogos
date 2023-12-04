import React, { useState, useEffect } from "react";
import { Container, Content, Info } from "./style";
import axios from "axios";

import { Button } from "@/components/Equipamentos/Button";
import Image from "next/image";

import clienteImage from "../../../assets/svg/carrinho.svg";
const url = "http://localhost:5000/api/venda/meslucro";

export const ListagemVendasMes = () => {
  const [data, setData] = useState([]);
  const [mes, setMes] = useState("");
  const ano = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(url, {
        mes: mes,
        ano: ano,
      });
      setData(resp.data);
      console.log("aqui", resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleMesChange = (event) => {
    const selectedMes = event.target.value;
    setMes(selectedMes);
  };

  const renderizando =
    data.length > 0 ? (
      data.map((item) => (
        <div>
          <h1>{item.totalVendas} vendas realizadas</h1>
          <a>Lucro total de R$ ${item.lucroTotal.toFixed(2)}</a>
        </div>
      ))
    ) : (
      <div>
        <p>Nenhuma venda foi realizada nesse mês.</p>
      </div>
    );

  return (
    <Container>
      <a id="title">Vendas por mês</a>
      <Info>
        <select id="mes" name="mes" onChange={handleMesChange} value={mes}>
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
        <Button height="30px" onClick={handleSubmit}>
          Procurar
        </Button>
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

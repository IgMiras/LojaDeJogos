import React, { useState, useEffect } from "react";
import { Container, Content, Info } from "./style";
import axios from "axios";

import { Button } from "@/components/Equipamentos/Button";
import Image from "next/image";

import clienteImage from "../../../assets/svg/carrinho.svg";
import { Input } from "@/components/Equipamentos/Input";

import { PROD_API_URL } from "@/constants";

export const ListagemVendasDesenvolvedoraMes = () => {
  const [data, setData] = useState([]);
  const [mes, setMes] = useState("");
  const [nomeDesenvolvedora, setNomeDesenvolvedora] = useState("");
  const ano = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(`${PROD_API_URL}/venda/desenvolvedora`, {
        nomeDesenvolvedora: nomeDesenvolvedora,
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
          <h1>{item.numeroJogosVendidos} jogos vendidos!</h1>
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
      <a id="title">Vendas da desenvolvedora </a>
      <Input
        type="text"
        name="nomeDesenvolvedora"
        id="nomeDesenvolvedora"
        placeHolder="Nome da desenvolvedora"
        width="100%"
        height="40px"
        value={nomeDesenvolvedora}
        onChange={(e) => setNomeDesenvolvedora(e.target.value)}
      />
      <a id="title2">no mês de </a>
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

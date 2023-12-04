import React, { useState, useEffect } from "react";
import { Container, Content, Info } from "./style";
import axios from "axios";
import { CardDesenvolvedora } from "@/components/Equipamentos/CardDesenvolvedora";
import { CardCliente } from "@/components/Equipamentos/CardCliente";
import { CardGerente } from "@/components/Equipamentos/CardGerente";
import { CardVenda } from "@/components/Equipamentos/CardVenda";
import { Input } from "@/components/Equipamentos/Input";
import { Button } from "@/components/Equipamentos/Button";

const url = "http://localhost:5000/api/cliente/historico";

export const ListagemHitoricoClienteEspecifico = () => {
  const [data, setData] = useState([]);
  const [nome, setNome] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          nome: nome,
        },
      });

      setData(response.data);
      console.log("Dados recebidos:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
      <a id="title">Histórico de Vendas de um cliente específico</a>
      <Info>
        <label>Informe abaixo o nome do cliente desejado:</label>
        <Input
          type="text"
          name="nome"
          id="nome"
          placeHolder="Insira aqui"
          width="100%"
          height="40px"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></Input>
        <Button height="30px" onClick={handleSubmit}>
          Procurar
        </Button>
      </Info>
      <Content>{renderizando}</Content>
    </Container>
  );
};
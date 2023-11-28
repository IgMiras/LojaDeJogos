import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardDesenvolvedora } from "@/components/Equipamentos/CardDesenvolvedora";
import { CardCliente } from "@/components/Equipamentos/CardCliente";

const url = "http://localhost:5000/api/cliente";

export const ListagemTodosClientes = () => {
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
    <CardCliente
      nome={item.nome}
      cnf={item.cpf}
      rg={item.rg}
      dataNasci={item.dataNasci}
      endereco={item.endereco}
      cep={item.cep}
      email={item.email}
      epico={item.clienteEpico}
    />
  ));

  return (
    <Container>
      <a id="title">Clientes</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

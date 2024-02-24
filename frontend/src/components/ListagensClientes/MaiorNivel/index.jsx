import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardDesenvolvedora } from "@/components/Equipamentos/CardDesenvolvedora";
import { CardCliente } from "@/components/Equipamentos/CardCliente";

import { PROD_API_URL } from "@/constants";

export const ListagemClientesComMaiorNivel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${PROD_API_URL}/cliente/maiornivel`)
      .then((response) => {
        setData(response.data);
        console.log("Dados recebidos:", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderizando = data.map((item) => (
    <CardCliente
      nome={item.nome}
      cpf={item.cpf}
      rg={item.rg}
      dataNasci={item.dataNasci}
      endereco={item.endereco}
      cep={item.cep}
      email={item.email}
      epico={item.clienteEpico}
      nivel={item.nivel}
    />
  ));

  return (
    <Container>
      <a id="title">10 Clientes com maior nível</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardDesenvolvedora } from "@/components/Equipamentos/CardDesenvolvedora";
import { CardCliente } from "@/components/Equipamentos/CardCliente";
import { CardGerente } from "@/components/Equipamentos/CardGerente";

import { PROD_API_URL } from "@/constants";

export const ListagemTodosGerentes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${PROD_API_URL}/gerente`)
      .then((response) => {
        setData(response.data);
        console.log("Dados recebidos:", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderizando = data.map((item) => (
    <CardGerente
      nome={item.nome}
      cnf={item.cpf}
      rg={item.rg}
      dataNasci={item.dataNasci}
      endereco={item.endereco}
      cep={item.cep}
      email={item.email}
      salario={item.salario}
      pis={item.pis}
      dataAdmissao={item.dataAdmissao}
    />
  ));

  return (
    <Container>
      <a id="title">Gerentes</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

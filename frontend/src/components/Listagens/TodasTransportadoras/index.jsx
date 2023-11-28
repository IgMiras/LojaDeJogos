import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardTransportadora } from "@/components/Equipamentos/CardTransportadora";

const url = "http://localhost:5000/api/transportadora";

export const ListagemTodasTransportadoras = () => {
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
    <CardTransportadora
      nome={item.nome}
      cnpj={item.cnpj}
      email={item.email}
      telefone={item.telefone}
      endereco={item.endereco}
    />
  ));

  return (
    <Container>
      <a id="title">Transportadoras</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

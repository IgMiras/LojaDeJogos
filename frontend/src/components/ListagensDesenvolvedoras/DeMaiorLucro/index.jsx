import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardDesenvolvedora } from "@/components/Equipamentos/CardDesenvolvedora";

import { PROD_API_URL } from "@/constants";

export const ListagemDesenvDeMaiorLucro = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${PROD_API_URL}/desenvolvedora/maiorlucro`)
      .then((response) => {
        setData(response.data);

        console.log("Dados recebidos:", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderizando = data.map((item) => (
    <CardDesenvolvedora
      nome={item.nome}
      cnpj={`Lucro Total = R$${item.lucroTotal.toFixed(2)} `}
      email={item.email}
      site={item.site}
      redes={item.redeSocial}
      endereco={item.endereco}
    />
  ));

  return (
    <Container>
      <a id="title">Desenvolvedoras de maior Lucro</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

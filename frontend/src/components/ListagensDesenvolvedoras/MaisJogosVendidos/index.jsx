import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import axios from "axios";
import { CardDesenvolvedora } from "@/components/Equipamentos/CardDesenvolvedora";

const url = "http://localhost:5000/api/desenvolvedora/maisjogosvendidos";

export const ListagemDesenvMaisJogosVendidos = () => {
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
    <CardDesenvolvedora
      nome={item.nome}
      cnpj={`${item.numeroJogosVendidos} jogos vendidos!`}
      email={item.email}
      site={item.site}
      redes={item.redeSocial}
      endereco={item.endereco}
    />
  ));

  return (
    <Container>
      <a id="title">Desenvolvedoras com mais jogos vendidos</a>
      <Content>{renderizando}</Content>
    </Container>
  );
};

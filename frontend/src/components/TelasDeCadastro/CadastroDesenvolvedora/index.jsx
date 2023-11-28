import React, { useState, useEffect } from "react";
import { Container, Content, Title } from "./style";
import axios from "axios";

import { Input } from "@/components/Equipamentos/Input";
import { Button } from "@/components/Equipamentos/Button";

const url = "http://localhost:5000/api/desenvolvedora";

export const TelaCadastroDesenvolvedora = () => {
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSIte] = useState("");
  const [redes, setRedes] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        cnpj: cnpj,
        nome: nome,
        email: email,
        site: site,
        redeSocial: redes,
        endereco: endereco,
      });
      console.log(resp.data);
      setCnpj("");
      setNome("");
      setEmail("");
      setSIte("");
      setRedes("");
      setEndereco("");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Container>
      <Title>
        <h1>Cadastro de Desenvolvedora</h1>
      </Title>
      <Content>
        <div id="inputs">
          <div id="input1">
            <label>CNPJ</label>
            <Input
              type="text"
              name="cnpj"
              id="cnpj"
              placeHolder="Insira aqui"
              width="100%"
              height="40px"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </div>
          <div id="input2">
            <label>Nome</label>
            <Input
              type="text"
              name="nome"
              id="nome"
              placeHolder="Insira aqui"
              width="100%"
              height="30px"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div id="input3">
            <label>Email</label>
            <Input
              type="text"
              name="email"
              id="email"
              placeHolder="Insira aqui"
              width="100%"
              height="30px"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="input4">
            <label>Site</label>
            <Input
              type="text"
              name="site"
              id="site"
              placeHolder="Insira aqui"
              width="100%"
              height="30px"
              value={site}
              onChange={(e) => setSIte(e.target.value)}
            />
          </div>
          <div id="input5">
            <label>Rede social</label>
            <Input
              type="text"
              name="redes"
              id="redes"
              placeHolder="Insira aqui"
              width="100%"
              height="30px"
              value={redes}
              onChange={(e) => setRedes(e.target.value)}
            />
          </div>
          <div id="input6">
            <label>Endereço</label>
            <Input
              type="text"
              name="endereco"
              id="endereco"
              placeHolder="Insira aqui"
              width="100%"
              height="30px"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
        </div>
        <div id="button">
          <Button height="40px" onClick={handleSubmit}>
            CADASTRAR
          </Button>
        </div>
      </Content>
    </Container>
  );
};

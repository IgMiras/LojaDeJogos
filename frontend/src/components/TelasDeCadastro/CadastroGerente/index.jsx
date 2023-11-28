import React, { useState, useEffect } from "react";
import { Container, Content, Title } from "./style";
import axios from "axios";

import { Input } from "@/components/Equipamentos/Input";
import { Button } from "@/components/Equipamentos/Button";

const url = "http://localhost:5000/api/gerente";

export const TelaCadastroGerente = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [nasc, setNasc] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [salario, setSalario] = useState("");
  const [pis, setPis] = useState("");
  const [dataAdmissao, setDataAdmissao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        nome: nome,
        cpf: cpf,
        rg: rg,
        nasc: nasc,
        endereco: endereco,
        cep: cep,
        email: email,
        salario: salario,
        pis: pis,
        dataAdmissao: dataAdmissao,
      });
      console.log(resp.data);
      setNome("");
      setCpf("");
      setRg("");
      setNasc("");
      setEndereco("");
      setCep("");
      setEmail("");
      setSalario("");
      setPis("");
      setDataAdmissao("");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Container>
      <Title>
        <h1>Cadastro de Gerente</h1>
      </Title>
      <Content>
        <div id="inputs">
          <div id="input1">
            <label>Nome</label>
            <Input
              type="text"
              name="nome"
              id="nome"
              placeHolder="Insira o nome"
              width="100%"
              height="40px"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div id="input2">
            <label>CPF</label>
            <Input
              type="text"
              name="cpf"
              id="cpf"
              placeHolder="Insira o CPF"
              width="100%"
              height="30px"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div id="input3">
            <label>RG</label>
            <Input
              type="text"
              name="rg"
              id="rg"
              placeHolder="Insira aqui"
              width="100%"
              height="30px"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
            />
          </div>
          <div id="input4">
            <label>Data de nascimento</label>
            <Input
              type="text"
              name="nasc"
              id="nasc"
              placeHolder="DD/MM/YYYY"
              width="100%"
              height="30px"
              value={nasc}
              onChange={(e) => setNasc(e.target.value)}
            />
          </div>
          <div id="input5">
            <label>Endereço</label>
            <Input
              type="text"
              name="endereco"
              id="endereco"
              placeHolder="Ex. Rua..."
              width="100%"
              height="30px"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div id="input6">
            <label>CEP</label>
            <Input
              type="text"
              name="cep"
              id="cep"
              placeHolder="00000-000"
              width="100%"
              height="30px"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div id="input7">
            <label>Email</label>
            <Input
              type="text"
              name="email"
              id="email"
              placeHolder="exemplo@gmail.com"
              width="100%"
              height="30px"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="input8">
            <label>Salário</label>
            <Input
              type=" text"
              name="salario"
              id="salario"
              placeHolder="R$"
              width="100%"
              height="30px"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />
          </div>
          <div id="input9">
            <label>PIS</label>
            <Input
              type="text"
              name="pis"
              id="pis"
              placeHolder="Digite nesse campo"
              width="100%"
              height="30px"
              value={pis}
              onChange={(e) => setPis(e.target.value)}
            />
          </div>
          <div id="input10">
            <label>Data de admissão</label>
            <Input
              type="text"
              name="dataAdmissao"
              id="dataAdmissao"
              placeHolder="DD/MM/YYYY"
              width="100%"
              height="30px"
              value={dataAdmissao}
              onChange={(e) => setDataAdmissao(e.target.value)}
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

import React, { useState, useEffect } from "react";
import { Container, Content, Title } from "./style";
import axios from "axios";

import { Input } from "@/components/Equipamentos/Input";
import { Button } from "@/components/Equipamentos/Button";

const url = "http://localhost:5000/api/jogos";

export const TelaCadastroJogos = () => {
  const [nome, setNome] = useState("");
  const [desenvolvedora, setDesenvolvedora] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [linkImagem, setLinkImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [disponivel, setDisponivel] = useState("");
  const [ehFisico, setEhFisico] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(url, {
        nome: nome,
        descricao: descricao,
        desenvolvedora: desenvolvedora,
        dataLancamento: dataLancamento,
        valor: valor,
        requisitos: requisitos,
        tipo: tipo,
        linkImagem: linkImagem,
      });
      console.log(resp.data);
      setNome("");
      setDesenvolvedora("");
      setDataLancamento("");
      setValor("");
      setTipo("");
      setLinkImagem("");
      setDescricao("");
      setRequisitos("");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Container>
      <Title>
        <h1>Cadastro de Jogo</h1>
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
              height="auto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div id="input2">
            <label>Desenvolvedora</label>
            <Input
              type="text"
              name="desenvolvedora"
              id="desenvolvedora"
              placeHolder="Insira o CPF"
              width="100%"
              height="auto"
              value={desenvolvedora}
              onChange={(e) => setDesenvolvedora(e.target.value)}
            />
          </div>
          <div id="input3">
            <label>Data de lançamento</label>
            <Input
              type="text"
              name="dataLancamento"
              id="dataLancamento"
              placeHolder="DD/MM/YYYY"
              width="100%"
              height="auto"
              value={dataLancamento}
              onChange={(e) => setDataLancamento(e.target.value)}
            />
          </div>
          <div id="input4">
            <label>Valor</label>
            <Input
              type="text"
              name="valor"
              id="valor"
              placeHolder="R$00,00"
              width="100%"
              height="auto"
              onChange={(e) => setValor(e.target.value)}
              value={valor}
            />
          </div>
          <div id="input5">
            <label>Tipo do jogo</label>
            <Input
              type="text"
              name="tipo"
              id="tipo"
              placeHolder="Ex. Ação"
              width="100%"
              height="auto"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
          </div>
          <div id="input6">
            <label>Link da imagem</label>
            <Input
              type="text"
              name="link"
              id="link"
              placeHolder="Cole o link da capa do jogo"
              width="100%"
              height="auto"
              value={linkImagem}
              onChange={(e) => setLinkImagem(e.target.value)}
            />
          </div>
          <div id="input7">
            <label>Requisitos mínimos</label>
            <Input
              type="text"
              name="requisitos"
              id="requisitos"
              placeHolder="Ex. Processador Intel Core 7"
              width="100%"
              height="auto"
              value={requisitos}
              onChange={(e) => setRequisitos(e.target.value)}
            />
          </div>
        </div>
        <div id="desc">
          <label>Descrição do jogo</label>
          <Input
            type="text"
            name="descricao"
            id="descricao"
            placeHolder=""
            width="100%"
            height="120px"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
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

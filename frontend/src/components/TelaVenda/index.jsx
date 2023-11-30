import { CardListagemProdutos } from "../Equipamentos/CardListagemProdutos";
import React, { useState, useEffect, useContext } from "react";
import {
  Carrinho,
  ConcluirVenda,
  Container,
  Content,
  ConteudoCarrinho,
  ImagemTipoPagamento,
  InfosCompra,
  Inputs,
  InputsCartao,
  JogosSelecionados,
  Pagamento,
  RadioInputs,
} from "./style";
import axios from "axios";
import { CardProdutos } from "../Equipamentos/CardProdutos";
import { Input } from "../Equipamentos/Input";
import Image from "next/image";
import boleto from "../../assets/images/boleto.png";
import caminhao from "../../assets/svg/caminhao.svg";

import { CardCarrinhoProduto } from "../Equipamentos/CarrinhoCardProduto";
import { stringify } from "postcss";
import AppContext from "../../../context/context";
import Provider from "../../../context/provider";

const url = "http://localhost:5000/api/jogos";

export const TelaNovaVenda = () => {
  const [data, setData] = useState([]);
  const [nomeCliente, setNomeCliente] = useState("");
  const [nomeGerente, setNomeGerente] = useState("");
  const [dataVenda, setDataVenda] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("");
  const { cartItems } = useContext(AppContext);

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
    <CardProdutos
      titulo={item.nome}
      desenvolvedora={item.descricao}
      src={item.linkImagem}
      item={item}
    />
  ));

  const renderizaCarrinho = cartItems.map((cartItem) => (
    <CardCarrinhoProduto
      id={cartItem.id}
      src={cartItem.linkImagem}
      nomeJogo={cartItem.nome}
      nomeDesenvolvedora={cartItem.desenvolvedora}
      tipoJogo={cartItem.tipoJogo}
      valor={cartItem.valor}
    ></CardCarrinhoProduto>
  ));
  const InfosCartao = () => (
    <InputsCartao>
      <div id="input1">
        <label>Nome:</label>
        <Input
          type="text"
          name="nome"
          id="nome"
          placeHolder="Nome do cartão"
          width="100%"
          height="40px"
        />
      </div>
      <div id="input2">
        <label>Bandeira:</label>
        <Input
          type="text"
          name="bandeira"
          id="bandeira"
          placeHolder="Ex. Visa"
          width="100%"
          height="40px"
        />
      </div>
      <div id="input3">
        <label>Número</label>
        <Input
          type="text"
          name="numero"
          id="numero"
          placeHolder="_ _ _"
          width="100%"
          height="40px"
        />
      </div>
    </InputsCartao>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(url, {
        nomeCliente: nomeCliente,
        nomeGerente: nomeGerente,
        dataVenda: dataVenda,
        dataEntrega: dataEntrega,
        tipoPagamento: tipoPagamento,
      });
      console.log(resp.data);
      setNomeCliente("");
      setNomeGerente("");
      setDataVenda("");
      setDataEntrega("");
      setTipoPagamento("");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <Container>
      <a id="title">Carrinho</a>
      <Content>{renderizando}</Content>
      <Carrinho>
        <ConteudoCarrinho>
          <span>Itens</span>
          <JogosSelecionados>{renderizaCarrinho}</JogosSelecionados>
          <InfosCompra>
            <a>VALOR TOTAL:</a>
            <a>VALOR C/ DESCONTO:</a>
          </InfosCompra>
          <ConcluirVenda>
            <Inputs>
              <div id="input1">
                <label>Nome cliente:</label>
                <Input
                  type="text"
                  name="nomeCliente"
                  id="nomeCliente"
                  placeHolder="Insira o nome do cliente"
                  width="100%"
                  height="40px"
                  value={nomeCliente}
                  onChange={(e) => setNomeCliente(e.target.value)}
                />
              </div>
              <div id="input2">
                <label>Nome gerente:</label>
                <Input
                  type="text"
                  name="nomeGerente"
                  id="nomeGerente"
                  placeHolder="Insira o nome do gerente"
                  width="100%"
                  height="40px"
                  value={nomeGerente}
                  onChange={(e) => setNomeGerente(e.target.value)}
                />
              </div>
              <div id="input3">
                <label>Data da venda</label>
                <Input
                  type="text"
                  name="dataVenda"
                  id="dataVenda"
                  placeHolder="DD/MM/YYYY"
                  width="100%"
                  height="40px"
                  value={dataVenda}
                  onChange={(e) => setDataVenda(e.target.value)}
                />
              </div>
              <div id="input4">
                <label>Data de entrega</label>
                <Input
                  type="text"
                  name="dataEntrega"
                  id="dataEntrega"
                  placeHolder="DD/MM/YYYY"
                  width="100%"
                  height="40px"
                  value={dataEntrega}
                  onChange={(e) => setDataEntrega(e.target.value)}
                />
              </div>
            </Inputs>
            <Pagamento>
              <div id="titulo">
                <a>FORMA DE PAGAMENTO</a>
              </div>
              <RadioInputs>
                <input
                  type="radio"
                  id="tipoPagamento"
                  name="tipoPagamento"
                  //   checked={tipoPagamento === true}
                  onChange={() => setTipoPagamento("Boleto")}
                ></input>
                <label id="sim">BOLETO</label>
                <input
                  type="radio"
                  id="tipoPagamento"
                  name="tipoPagamento"
                  //   checked={tipoPagamento === true}
                  onChange={() => setTipoPagamento("Cartão de Crédito")}
                ></input>
                <label>CARTÃO DE CRÉDITO</label>
                <input
                  type="radio"
                  id="tipoPagamento"
                  name="tipoPagamento"
                  //   checked={tipoPagamento === true}
                  onChange={() => setTipoPagamento("PIX")}
                ></input>
                <label>PIX</label>
              </RadioInputs>
              <ImagemTipoPagamento>
                {tipoPagamento === "" ? (
                  <a>Escolha uma forma de pagamento</a>
                ) : tipoPagamento === "Boleto" ? (
                  <Image id="img" src={boleto} alt="Código de barras" />
                ) : tipoPagamento === "Cartão de Crédito" ? (
                  <InfosCartao />
                ) : (
                  <Image id="img" src={boleto} alt="Stars" />
                )}
              </ImagemTipoPagamento>
            </Pagamento>
          </ConcluirVenda>
        </ConteudoCarrinho>
      </Carrinho>
    </Container>
  );
};

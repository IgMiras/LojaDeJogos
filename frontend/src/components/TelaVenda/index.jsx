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
  ItemFisico,
  JogosSelecionados,
  Pagamento,
  RadioInputs,
} from "./style";
import axios from "axios";
import { CardProdutos } from "../Equipamentos/CardProdutos";
import { Input } from "../Equipamentos/Input";
import Image from "next/image";
import boleto from "../../assets/images/boleto.png";
import pix from "../../assets/images/PIX.png";

import { CardCarrinhoProduto } from "../Equipamentos/CarrinhoCardProduto";
import { stringify } from "postcss";
import AppContext from "../../../context/context";
import Provider from "../../../context/provider";
import { CardCarrinhoTransportadora } from "../Equipamentos/CarrinhoCardTransportadora";

const url = "http://localhost:5000/api/jogos";
const urlTransportadoras = "http://localhost:5000/api/transportadora";

export const TelaNovaVenda = () => {
  const [data, setData] = useState([]);
  const [dataTransportadora, setDataTransportadora] = useState([]);
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

  useEffect(() => {
    axios
      .get(urlTransportadoras)
      .then((response) => {
        setDataTransportadora(response.data);
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

  const renderizaTransportadoras = cartItems.map((cartItem) => {
    console.log(cartItem);
    if (cartItem.ehFisico) {
      console.log(cartItem);
      return dataTransportadora.map((itemT) => (
        <CardCarrinhoTransportadora
          nomeTransportadora={itemT.nome}
          tempoEntrega={itemT.tempoEntrega}
        />
      ));
    }
    return <a>lais</a>;
  });

  const valorTotal = () => {
    const total = cartItems.reduce((acc, cartItem) => {
      const itemValue = parseFloat(cartItem.valor);
      if (!isNaN(itemValue)) {
        return acc + itemValue;
      } else {
        console.warn(
          `Invalid valor for cart item: ${JSON.stringify(cartItem)}`
        );
        return acc;
      }
    }, 0);

    return total;
  };

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
            <a>VALOR TOTAL: R${valorTotal()}</a>
            <a>VALOR C/ DESCONTO:</a>
          </InfosCompra>
          <ItemFisico>{renderizaTransportadoras}</ItemFisico>
          <ConcluirVenda>
            <a id="concluir">Concluir venda</a>
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
                  <Image id="img" src={pix} alt="Código QR de pagamento" />
                )}
              </ImagemTipoPagamento>
            </Pagamento>
          </ConcluirVenda>
        </ConteudoCarrinho>
      </Carrinho>
    </Container>
  );
};

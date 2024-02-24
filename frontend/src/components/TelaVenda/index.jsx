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
import boleto from "../../assets/images/Boleto.png";
import pix from "../../assets/images/PIX.png";

import { CardCarrinhoProduto } from "../Equipamentos/CarrinhoCardProduto";
import { stringify } from "postcss";
import AppContext from "../../../context/context";
import Provider from "../../../context/provider";
import { CardCarrinhoTransportadora } from "../Equipamentos/CarrinhoCardTransportadora";
import { Button } from "../Equipamentos/Button";

import { PROD_API_URL } from "@/constants";

export const TelaNovaVenda = () => {
  //cadastro de nova venda
  const [dataJogos, setDataJogos] = useState([]);
  const [dataTransportadora, setDataTransportadora] = useState([]);
  const [nomeCliente, setNomeCliente] = useState("");
  const [nomeGerente, setNomeGerente] = useState("");
  const [nomeTransportadora, setNomeTransportadora] = useState("");
  const [dataVenda, setDataVenda] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");
  const { cartItems } = useContext(AppContext);
  let itensVendaObjeto = [...cartItems];
  let itensVendaString = JSON.stringify(itensVendaObjeto);
  let itensVenda = JSON.parse(itensVendaString);
  const [idPagamento, setIdPagamento] = useState("");

  //cadastro pagamento
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [bandeiraCartao, setBandeiraCartao] = useState("");
  const [codigoNota, setCodigoNota] = useState(
    parseInt(Math.random() * 7895620)
  );
  const tipo = formaPagamento;
  const [numeroBoleto, setNumeroBoleto] = useState(
    parseInt(Math.random() * 500000)
  );
  const [codigoPix, setCodigoPix] = useState(
    parseInt(Math.random() * 100000000000)
  );

  useEffect(() => {
    axios
      .get(`${PROD_API_URL}/jogos`)
      .then((response) => {
        setDataJogos(response.data);
        // console.log("Dados recebidos:", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${PROD_API_URL}/transportadora`)
      .then((response) => {
        setDataTransportadora(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderizando = dataJogos.map((item) => (
    <CardProdutos
      titulo={item.nome}
      desenvolvedora={item.desenvolvedora.nome}
      src={item.linkImagem}
      item={item}
    />
  ));

  const renderizaCarrinho = cartItems.map((cartItem) => (
    <CardCarrinhoProduto
      id={cartItem.id}
      src={cartItem.linkImagem}
      nomeJogo={cartItem.nome}
      nomeDesenvolvedora={cartItem.desenvolvedora.nome}
      tipoJogo={cartItem.tipoJogo}
      valor={cartItem.valor}
    ></CardCarrinhoProduto>
  ));

  const renderizaTransportadoras = cartItems.map((cartItem) => {
    // console.log(cartItem);
    if (cartItem.ehFisico) {
      // console.log(cartItem);
      return dataTransportadora.map((itemT) => (
        <CardCarrinhoTransportadora
          nomeTransportadora={itemT.nome}
          tempoEntrega={itemT.tempoEntrega}
        />
      ));
    } else return null;
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

  const valorDesconto = () => {
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

    return total * 0.95;
  };

  const InfosCartao = () => (
    <InputsCartao>
      <div id="input1">
        <label>Nome:</label>
        <Input
          type="text"
          name="nomeCartao"
          id="nomeCartao"
          placeHolder="Insira o nome que esta no cartão"
          width="100%"
          height="40px"
          value={nomeCartao}
          onChange={(e) => setNomeCartao(e.target.value)}
        />
      </div>
      <div id="input2">
        <label>Bandeira:</label>
        <Input
          type="text"
          name="bandeiraCartao"
          id="bandeiraCartao"
          placeHolder="Ex. VISA"
          width="100%"
          height="40px"
          value={bandeiraCartao}
          onChange={(e) => setBandeiraCartao(e.target.value)}
        />
      </div>
      <div id="input3">
        <label>Número</label>
        <Input
          type="text"
          name="numeroCartao"
          id="numeroCartao"
          placeHolder="_ _ _"
          width="100%"
          height="40px"
          value={numeroCartao}
          onChange={(e) => setNumeroCartao(e.target.value)}
        />
      </div>
    </InputsCartao>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respPagamento = await axios.post(`${PROD_API_URL}/pagamento`, {
        codigoNota: codigoNota,
        tipo: tipo,
        numeroBoleto: numeroBoleto,
        nomeCartao: nomeCartao,
        bandeiraCartao: bandeiraCartao,
        numeroCartao: numeroCartao,
        codigoPix: codigoPix,
      });

      setIdPagamento(respPagamento.data);

    } catch (error) {
      console.log(error.response);
    }

    try {
      
      const nomesItensVenda = itensVenda.map(item => item.nome);

      console.log(
        nomeCliente,
        nomeGerente,
        nomeTransportadora,
        dataVenda,
        dataEntrega,
        nomesItensVenda,
        idPagamento
      )

      const resp = await axios.post(`${PROD_API_URL}/venda`, {
        nomeCliente: nomeCliente,
        nomeGerente: nomeGerente,
        nomeTransportadora: nomeTransportadora,
        dataVenda: dataVenda,
        dataEntrega: dataEntrega,
        itensVenda: nomesItensVenda,
        idPagamento: idPagamento,
      });

      console.log(resp.data);

      setCodigoPix(parseInt(Math.random() * 50000));
      setNumeroBoleto(parseInt(Math.random() * 2301854));
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
            <a id="total">VALOR TOTAL = R${valorTotal().toFixed(2)}</a>
            <a id="desc">
              Valor com 5% de desconto caso seja cliente épico: R$
              {valorDesconto().toFixed(2)}
            </a>
          </InfosCompra>
          <a id="concluir">Transportadoras</a>
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
                  placeHolder="MM/DD/YYYY"
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
                  placeHolder="MM/DD/YYYY"
                  width="100%"
                  height="40px"
                  value={dataEntrega}
                  onChange={(e) => setDataEntrega(e.target.value)}
                />
              </div>
            </Inputs>
            <div id="input5">
              <label>Nome Transportadora</label>
              <Input
                type="text"
                name="nomeTransportadora"
                id="nomeTransportadora"
                placeHolder="Em caso de não haver item físico deixe o campo em branco"
                width="100%"
                height="40px"
                value={nomeTransportadora}
                onChange={(e) => setNomeTransportadora(e.target.value)}
              />
            </div>
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
                  onChange={() => setFormaPagamento("Boleto")}
                ></input>
                <label id="sim">BOLETO</label>
                <input
                  type="radio"
                  id="tipoPagamento"
                  name="tipoPagamento"
                  //   checked={tipoPagamento === true}
                  onChange={() => setFormaPagamento("Cartao")}
                ></input>
                <label>CARTÃO DE CRÉDITO</label>
                <input
                  type="radio"
                  id="tipoPagamento"
                  name="tipoPagamento"
                  //   checked={tipoPagamento === true}
                  onChange={() => setFormaPagamento("Pix")}
                ></input>
                <label>PIX</label>
              </RadioInputs>
              <ImagemTipoPagamento>
                {formaPagamento === "" ? (
                  <a>Escolha uma forma de pagamento</a>
                ) : formaPagamento === "Boleto" ? (
                  <Image id="img" src={boleto} alt="Código de barras" />
                ) : formaPagamento === "Cartao" ? (
                  <InfosCartao />
                ) : (
                  <Image id="img" src={pix} alt="Código QR de pagamento" />
                )}
              </ImagemTipoPagamento>
            </Pagamento>

            <Button height="40px" onClick={handleSubmit}>
              CADASTRAR
            </Button>
          </ConcluirVenda>
        </ConteudoCarrinho>
      </Carrinho>
    </Container>
  );
};

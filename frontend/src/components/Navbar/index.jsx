import React from "react";
import {
  Container,
  Content,
  Elementos,
  Nav,
  Itens,
  Link,
  Trigger,
  NavContainer,
  SubContent,
  TriggerSub,
  SubContent2,
} from "./style";
import Image from "next/image";
import logoImg from "../../assets/images/image3.png";
import { ConteudoPopup } from "../NavbarComponent/index";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  return (
    <Content>
      <Container>
        <Image
          id="img"
          src={logoImg}
          alt="Logo da loja de jogos"
          onClick={() => router.push("/")}
        />
        <NavContainer>
          <Nav>
            <Elementos>
              <Itens>
                <Trigger> JOGOS</Trigger>

                <ConteudoPopup width="350px" top="45px" left="40px">
                  <ul>
                    <li onClick={() => router.push("/listarTodosJogos")}>
                      Todos os jogos
                    </li>
                    <li onClick={() => router.push("/telaAvaliacao")}>
                      Avaliar
                    </li>
                  </ul>
                </ConteudoPopup>
              </Itens>
              <Itens>
                <Trigger> VENDAS</Trigger>
                <ConteudoPopup width="500px" top="45px" left="150px">
                  <ul>
                    <li onClick={() => router.push("/listarTodasVendas")}>
                      Todas
                    </li>
                    <li
                      onClick={() => router.push("/listarVendasMesEspecifico")}
                    >
                      Vendas e lucro por mês
                    </li>
                    <li onClick={() => router.push("/listarVendasDesenvMes")}>
                      Vendas por desenvolvedoras
                    </li>
                    <li onClick={() => router.push("/listarVendasBoleto")}>
                      Pagas em boleto
                    </li>
                    <li onClick={() => router.push("/listarVendasCartao")}>
                      Pagas em cartão de crédito
                    </li>
                    <li onClick={() => router.push("/listarVendasPix")}>
                      Pagas com PIX
                    </li>
                  </ul>
                </ConteudoPopup>
              </Itens>
              <Itens>
                <Trigger> RELATÓRIOS</Trigger>

                <ConteudoPopup width="500px" top="45px" left="290px">
                  <SubContent>
                    <ul>
                      <TriggerSub> Jogos</TriggerSub>
                      <ConteudoPopup width="550px" top="25px" left="245px">
                        <SubContent>
                          <ul>
                            <li onClick={() => router.push("/listarJogosAcao")}>
                              Ação
                            </li>
                            <li
                              onClick={() =>
                                router.push("/listarJogosAventura")
                              }
                            >
                              Aventura
                            </li>
                            <li onClick={() => router.push("/listarJogosRpg")}>
                              RPG
                            </li>
                            <li
                              onClick={() => router.push("/listarJogosEsporte")}
                            >
                              Esporte
                            </li>
                            <li
                              onClick={() => router.push("/listarJogosCorrida")}
                            >
                              Corrida
                            </li>
                            <li
                              onClick={() => router.push("/listarJogosCaros")}
                            >
                              Os 10 jogos mais caros
                            </li>
                            <li
                              onClick={() => router.push("/listarJogosBaratos")}
                            >
                              Os 10 jogos mais baratos
                            </li>
                          </ul>
                        </SubContent>
                      </ConteudoPopup>

                      <li
                        onClick={() =>
                          router.push("/listarTodasTransportadoras")
                        }
                      >
                        Transportadoras
                      </li>
                      <li onClick={() => router.push("/listarTodosGerentes")}>
                        Gerentes
                      </li>
                    </ul>
                  </SubContent>
                </ConteudoPopup>
              </Itens>
              <Itens>
                <Trigger> CLIENTES</Trigger>
                <ConteudoPopup width="500px" top="45px" left="470px">
                  <ul>
                    <li onClick={() => router.push("/listarTodosClientes")}>
                      Todos
                    </li>
                    <li onClick={() => router.push("/listarClientesEpicos")}>
                      Clientes épicos
                    </li>
                    <li
                      onClick={() => router.push("/listarClientesMaiorNivel")}
                    >
                      Dez clientes com maior nível
                    </li>
                    <li
                      onClick={() =>
                        router.push("/listarHistoricoClienteEspecifico")
                      }
                    >
                      Histórico de venda
                    </li>
                  </ul>
                </ConteudoPopup>
              </Itens>
              <Itens>
                <Trigger> DESENVOLVEDORAS</Trigger>
                <ConteudoPopup width="450px" top="45px" left="620px">
                  <ul>
                    <li
                      onClick={() => router.push("/listarTodasDesenvolvedoras")}
                    >
                      Todas
                    </li>
                    <li
                      onClick={() =>
                        router.push("/listarDesenvMaisJogosVendidos")
                      }
                    >
                      Com mais jogos vendidos
                    </li>

                    <li onClick={() => router.push("/listarDesenvMaiorLucro")}>
                      De maior lucro
                    </li>
                  </ul>
                </ConteudoPopup>
              </Itens>

              <Itens>
                <Trigger> CADASTRAR</Trigger>
                <ConteudoPopup width="350px" top="45px" left="880px">
                  <ul>
                    <li onClick={() => router.push("/cadastroDeCliente")}>
                      Cliente
                    </li>
                    <li onClick={() => router.push("/cadastroDeGerente")}>
                      Gerente
                    </li>
                    <li onClick={() => router.push("/cadastroDeDesenv")}>
                      Desenvolvedora
                    </li>
                    <li onClick={() => router.push("/cadastroDeJogo")}>
                      Jogo
                    </li>
                    <li onClick={() => router.push("/cadastroNovaVenda")}>
                      Nova Venda
                    </li>
                  </ul>
                </ConteudoPopup>
              </Itens>
            </Elementos>
          </Nav>
        </NavContainer>
      </Container>
    </Content>
  );
};

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

                <ConteudoPopup width="350px" top="45px" left="70px">
                  <ul>
                    <li onClick={() => router.push("/")}>Todos os jogos</li>
                    <li onClick={() => router.push("/")}>Avaliar</li>
                  </ul>
                </ConteudoPopup>
              </Itens>
              <Itens>
                <Link href="#vendas"> VENDAS</Link>
              </Itens>
              <Itens>
                <Trigger> RELATÓRIOS</Trigger>

                <ConteudoPopup width="500px" top="45px" left="390px">
                  <SubContent>
                    <ul>
                      <TriggerSub> Jogos</TriggerSub>
                      <ConteudoPopup width="550px" top="25px" left="245px">
                        <SubContent>
                          <ul>
                            <li onClick={() => router.push("/")}>Ação</li>
                            <li onClick={() => router.push("/")}>Aventura</li>
                            <li onClick={() => router.push("/")}>RPG</li>
                            <li onClick={() => router.push("/")}>Esporte</li>
                            <li onClick={() => router.push("/")}>Corrida</li>
                            <li onClick={() => router.push("/")}>
                              Os 10 jogos mais caros
                            </li>
                            <li onClick={() => router.push("/")}>
                              Os 10 jogos mais baratos
                            </li>
                            <TriggerSub>Lista de avaliações</TriggerSub>
                            <ConteudoPopup
                              width="300px"
                              top="265px"
                              left="155px"
                            >
                              <SubContent>
                                <ul>
                                  <li onClick={() => router.push("/")}>
                                    Tipo A
                                  </li>
                                  <li onClick={() => router.push("/")}>
                                    Tipo B
                                  </li>
                                </ul>
                              </SubContent>
                            </ConteudoPopup>
                          </ul>
                        </SubContent>
                      </ConteudoPopup>
                      <li onClick={() => router.push("/")}>Desenvolvedoras</li>
                      <li onClick={() => router.push("/")}>Transportadoras</li>
                      <li onClick={() => router.push("/")}>Gerentes</li>
                      <li onClick={() => router.push("/")}>Clientes</li>
                      <li onClick={() => router.push("/")}>Vendas</li>
                    </ul>
                  </SubContent>
                </ConteudoPopup>
              </Itens>
              <Itens>
                <Link href="#clientes"> CLIENTES </Link>
              </Itens>
              <Itens>
                <Trigger> CADASTRAR</Trigger>
                <ConteudoPopup width="350px" top="45px" left="790px">
                  <ul>
                    <li>Cliente</li>
                    <li>Gerente</li>
                    <li>Gênero do jogo</li>
                    <li>Desenvolvedora</li>
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

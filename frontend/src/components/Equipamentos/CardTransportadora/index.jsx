import { Container, Description, Title, Content } from "./style";

export const CardTransportadora = ({
  nome,
  cnpj,
  email,
  telefone,
  endereco,
}) => {
  return (
    <Container>
      <Content>
        <Title>{nome}</Title>
        <Description>
          <a id="cnpj">{cnpj}</a>
          <a id="email">{email}</a>
          <a id="telefone">{telefone}</a>
          <a id="endereco">{endereco}</a>
        </Description>
      </Content>
    </Container>
  );
};

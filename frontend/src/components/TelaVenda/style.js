import styled from "styled-components";

export const Container = styled.div`
  padding: 150px 95px 95px 95px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #023454;

  #title {
    font-weight: bold;
    font-size: 3.5rem;
    color: white;
    letter-spacing: 1.5px;
  }
  #concluir {
    color: #023454;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4%;
  column-gap: 5%;
  padding: 95px;
`;

export const Carrinho = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 100%;
  padding: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`;

export const ConteudoCarrinho = styled.div`
  background-color: #d9d9d9;
  border: 2px solid #023454;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  padding: 50px 80px;

  span {
    font-size: 2rem;
    font-weight: bold;
    color: #023454;
  }

  #title {
    font-weight: bold;
    font-size: 2.2rem;
    color: #023454;
    letter-spacing: 0.5px;
  }
`;

export const JogosSelecionados = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const InfosCompra = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15%;
  color: #023454;
  margin: 2% 0;
`;

export const Transportadoras = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ItemFisico = styled.div`
  margin: 2% 0;
`;
export const ConcluirVenda = styled.div`
  #concluir {
    color: #023454;
    font-size: 2rem;
    font-weight: bold;
  }

  #input5 {
    margin-top: 4%;
  }
  p,
  label {
    color: rgba(2, 52, 84, 1);
    margin-left: 6px;
    margin-bottom: 6px;
    font-size: 1.1rem;
    font-weight: normal;
  }

  Input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.2fr;
  column-gap: 8%;
  row-gap: 10%;

  p,
  label {
    color: rgba(2, 52, 84, 1);
    margin-left: 6px;
    margin-bottom: 6px;
    font-size: 1.1rem;
    font-weight: normal;
  }

  Input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Pagamento = styled.div`
  margin-top: 5%;
  a {
    color: #023454;
  }
`;
export const RadioInputs = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1%;
  color: #023454;
  label {
    margin-right: 5%;
  }
`;

export const ImagemTipoPagamento = styled.div`
  padding: 5%;
`;

export const InputsCartao = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.2fr;
  column-gap: 8%;
  row-gap: 10%;

  p,
  label {
    color: rgba(2, 52, 84, 1);
    margin-left: 6px;
    margin-bottom: 6px;
    font-size: 1.1rem;
    font-weight: normal;
  }

  Input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

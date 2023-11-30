import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 2% 2%;
  background-color: rgba(255, 255, 255, 0.54);
  display: grid;
  margin-bottom: 2%;
  grid-template-columns: 0.3fr 1.5fr 0.7fr 0.5fr;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: left;

  #productImage {
    width: 100px;
    height: 80px;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 3%;

  #titulo {
    font-weight: bold;
    font-size: 1.2rem;

    justify-content: center;
    display: flex;
  }

  #sub {
    font-size: 0.6rem;
    text-align: center;
    font-weight: bold;
  }
`;
export const Valor = styled.div`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  display: flex;
  a {
    margin-top: 5%;
  }
`;
export const ButtonQuant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  #item_quantity {
    text-align: center;

    width: 2rem;
    height: 2rem;
    background-color: #023454;
    margin: 0.5rem;

    font-size: 1rem;
    color: white;

    border: none;
    border-radius: 15px;
  }

  button {
    width: 1.9rem;

    color: rgba(2, 34, 65, 0.8);
    border: none;
    border-radius: 50%;

    text-align: center;
    font-size: 2rem;
    font-weight: bold;

    transition: ease-in-out 0.3s;

    &:hover {
      opacity: 70%;
    }
  }
`;

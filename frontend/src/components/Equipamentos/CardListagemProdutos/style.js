import styled from "styled-components";

export const Container = styled.div`
  margin: 2%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding-bottom: 10px;
  border: 0.2px solid #4ec1e5;

  @media (max-width: 930px) {
    width: 20%;
  }

  @media (max-width: 650px) {
    width: 25%;
  }

  @media (max-width: 500px) {
    width: 30%;
  }

  @media (max-width: 400px) {
    width: 40%;
  }

  @media (max-width: 300px) {
    width: 45%;
  }
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 7%;

  #productImage {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.div`
  border-top: 1.5px solid #4ec1e5;
  padding: 20px 20px 10px 20px;

  display: flex;
  flex-direction: column;

  #titulo {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 4%;
    justify-content: center;
    display: flex;
    color: #013757;
  }

  #sub {
    font-size: 0.6rem;
  }
`;

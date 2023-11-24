import styled from "styled-components";

export const Container = styled.div`
  margin: 2%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding-bottom: 10px;
  border: 0.2px solid gray;
  min-width: 20%;

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
  border-top: 1.5px solid gray;
  padding: 20px 20px 10px 20px;

  display: flex;
  flex-direction: column;

  #titulo {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 4%;
    justify-content: center;
    display: flex;
  }

  #sub {
    font-size: 0.6rem;
  }

  #button {
    Button {
      background-color: rgba(78, 193, 229, 1);
      color: white;
      width: 100%;
      margin: 6% 0 0 0;
      padding: 1px;
      font-size: 0.9rem;
    }
  }
  @media (max-width: 400px) {
    #button {
      margin-top: 5px;
      margin-bottom: 0;
      Button {
        font-size: 0.7rem;
        font-weight: normal;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  padding: 95px;
`;

export const Content = styled.div`
  border: 1px solid rgba(1, 118, 154, 1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  height: 100%;
  padding: 5% 5%;
  border-radius: 14px;
  font-weight: 300;
  font-size: 0.9rem;
  color: rgba(2, 52, 84, 1);
  margin: 5% 15%;
  #inputs {
    display: grid;
    grid-template-columns: 1.2fr 1.2fr;
    column-gap: 8%;
    row-gap: 10%;

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
  }
  margin-bottom: 5%;

  #button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10%;
    padding: 2% 30%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
  margin-top: 5%;
  h1 {
    color: rgba(1, 55, 87, 1);
    font-size: 3rem;
    font-weight: bold;
  }
`;

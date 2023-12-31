import styled from "styled-components";

export const Container = styled.div`
  margin: 5%;
  width: 90%;
  height: 150px;
  border-radius: 10px;

  border: 0.2px solid #01769a;
  display: flex;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 3%;

  #productImage {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.3%;
  width: 80%;

  #titulo {
    font-weight: bold;
    font-size: 1.5rem;
    justify-content: left;
    display: flex;
    color: #013757;
    margin-bottom: 3.5%;
  }

  #sub {
    font-size: 0.8rem;
    font-weight: 400;
  }

  #value {
    display: flex;
    /* margin-top: 2%; */
    font-weight: bold;
    font-size: 1rem;
    justify-content: end;
    align-items: end;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 2% 2%;
  display: flex;
  flex-direction: row;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 3%;

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
  }
`;

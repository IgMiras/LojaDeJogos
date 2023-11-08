import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-bottom: 5%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 150px 95px 95px 95px;
  height: 100%;

  #img {
    padding: 0%;
    border-radius: 35px;
    box-shadow: -5px 5px 40px rgba(1, 55, 87, 1);
  }
`;
export const Texto = styled.div`
  padding: 0 3%;
  #title {
    font-size: 3rem;
    font-weight: bold;
    color: rgba(1, 55, 87, 1);
  }

  #sub {
    font-size: 1.7rem;
  }
`;

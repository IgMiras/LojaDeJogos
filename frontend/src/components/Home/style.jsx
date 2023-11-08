import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, #022241 8.96%, #00caf5 100%);
  color: white;
  justify-content: center;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 95px 95px 95px;
`;

export const Content = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 100px 0 190px;
  margin-top: 7%;

  #title {
    font-size: 3.5rem;
    font-weight: bold;
  }
  #sub {
    font-size: 1.5rem;
    line-height: 35.88px;
    font-weight: lighter;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  padding: 95px;
`;

export const Content = styled.div`
  border: 1px solid rgba(1, 118, 154, 1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  height: 100vh;
  padding: 10%;
  border-radius: 14px;
  font-weight: 300;
  font-size: 0.9rem;
  color: rgba(2, 52, 84, 1);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  h1 {
    color: rgba(1, 55, 87, 1);
    font-size: 3rem;
    font-weight: bold;
  }

  #img {
    width: 6%;
  }
`;

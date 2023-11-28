import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5%;
  padding: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #title {
    font-weight: bold;
    font-size: 2.8rem;
    color: #013757;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4%;
  column-gap: 5%;
  padding: 95px;
`;

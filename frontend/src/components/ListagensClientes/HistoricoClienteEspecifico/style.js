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

export const Info = styled.div`
  margin-top: 3%;
  label {
    color: rgba(2, 52, 84, 1);
    margin-left: 6px;
    margin-bottom: 6px;
    font-size: 1rem;
    font-weight: normal;
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

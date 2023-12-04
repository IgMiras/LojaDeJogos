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
  select {
    border: 1px solid rgba(1, 118, 154, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 6px;
    border-radius: 14px;
    font-weight: 300;
    height: 40px;
    font-size: 0.9rem;
    color: rgba(2, 52, 84, 1);
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

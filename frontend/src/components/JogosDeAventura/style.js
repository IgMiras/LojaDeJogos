import styled from "styled-components";

export const Container = styled.div`
  padding: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #title {
    font-weight: bold;
    font-size: 2.8rem;
    color: #013757;
    position: fixed;
    top: 50px;
  }
`;

export const Content = styled.div`
  width: 120%;
  display: inline-flex;
  padding: 95px;

  white-space: normal;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  border: 0.2px solid #4ec1e5;
  box-shadow: 8px 8px 20px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1%;
  justify-content: center;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 3%;

  #img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
  color: #013757;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-weight: bold;
    font-size: 0.6rem;
    line-height: 14px;
  }
`;

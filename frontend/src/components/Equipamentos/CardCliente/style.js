import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  border: 0.2px solid rgba(38, 158, 194, 1);
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;
  justify-content: center;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 6%;

  #img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
  color: #013757;
  margin-bottom: -8px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;

  #separator {
    display: flex;
    flex-direction: row;
    margin-top: 3%;
    column-gap: 3%;
  }

  a {
    font-weight: bold;
    font-size: 0.6rem;
    line-height: 14px;
  }

  p {
    color: #013757;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

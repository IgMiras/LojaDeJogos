import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 10px;

  border: 0.2px solid #01769a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 2% 0;
`;

export const Content = styled.div`
  margin: 5%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  margin-top: 5%;
  flex-direction: column;
  line-height: 12px;
`;

export const Title = styled.div`
  color: #013757;
  font-size: 1.3rem;
  text-align: center;
  border-bottom: 1px solid rgba(78, 193, 229, 0.61);
  width: 200px;
`;

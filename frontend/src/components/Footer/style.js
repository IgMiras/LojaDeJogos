import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme?.colors?.black || "#023454"};
  width: 100%;
  height: auto;
  padding: 1rem;
  /* position: fixed; */
  bottom: 0%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  margin: 1.2rem auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  color: ${(props) => props.theme?.colors?.white || "#000"};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WebsiteRights = styled.small`
  color: ${(props) => props.theme?.colors?.white || "#000"};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  padding: 0%.5 0;
  text-align: center;

  > img {
    width: 55%;
    height: 55%;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) =>
    props.theme?.colors?.white || "#000"}; /* Cor da linha */
`;

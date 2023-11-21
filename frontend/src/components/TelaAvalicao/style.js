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

export const First = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BlocoInput = styled.div`
  width: 40%;
`;

export const BlocoInput2 = styled.div`
  width: 30%;
`;

export const BlocoInput3 = styled.div`
  margin-top: 5%;
  label {
    color: rgba(2, 52, 84, 1);
    margin-left: 6px;
    margin-bottom: 6px;
    font-size: 1rem;
    font-weight: bold;
  }
  input {
    border: 1px solid rgba(1, 118, 154, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 6px;
    border-radius: 14px;
    font-weight: 300;
    height: 200px;
    font-size: 0.9rem;
    color: rgba(2, 52, 84, 1);
    margin-top: 1%;
  }

  input::placeholder {
    font-weight: 300;
    font-size: 0.8rem;
    padding: 5px;
    /* justify-content: ; */
    align-items: flex-start;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    width: ${(props) => props.width};
    padding: 6px;
    border-radius: 14px;
    font-weight: 300;
    height: ${(props) => props.height};
    font-size: 0.9rem;
    color: rgba(2, 52, 84, 1);
  }

  input::placeholder {
    font-weight: 300;
    font-size: 0.8rem;
    padding: 5px;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

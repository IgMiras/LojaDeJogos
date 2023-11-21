import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 20px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  height: ${(props) => props.height};
  text-align: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  padding: 10px;
  font-size: ${(props) => props.theme.fontSize.text};
  font-weight: ${(props) => props.theme.fontWeight.text};
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 25px;
    padding: 15px;
  }

  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${(props) => props.activeBackground};
  }
`;

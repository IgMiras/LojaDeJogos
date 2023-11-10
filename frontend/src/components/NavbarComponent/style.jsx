import styled, { css } from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const ConteudoPopupComponent = styled(NavigationMenu.Content)`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};

  @media (max-width: 1080px) {
    top: 25px;
    right: -5.5%;
  }

  @media (max-width: 400px) {
    right: -30%;
    top: 25px;
  }

  animation-duration: 150ms;
  animation-timing-function: ease;
  transition: width, height, 150ms ease;

  animation-name: scaleIn;

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: rotateX(-30deg) scale(0.9);
    }
    to {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
  }

  ul {
    grid-template-columns: 0.75fr 1fr;
    background-color: rgba(0, 0, 0, 0.75);
    list-style: none;
    width: 48%;
    font-size: 1rem;
    padding: 10px 10px 10px 10px;
    line-height: 30px;
    color: white;
    font-weight: 500;
    border-radius: 2px 0.5rem 0.5rem 0.5rem;
    align-items: left;

    @media (max-width: 420px) {
      line-height: 18px;
    }
  }

  #seta {
    margin: 2.5%;
    padding: 1px;
  }
  #topics {
    display: flex;
    justify-content: space-between;
    margin: 1%;
    padding-left: 10px;
  }

  #topics:hover,
  li:hover {
    color: rgba(0, 202, 245, 1);
    cursor: pointer;
  }
`;

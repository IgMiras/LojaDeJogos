import styled from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const Content = styled.div`
  z-index: 999;
  width: 100%;
  position: fixed;
  padding: 4px;
  top: 0%;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);

  -webkit-box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.21);
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.21);

  #img {
    width: 15%;
    height: auto;
    padding: 0.5rem;
    margin-left: 1.5%;
    cursor: pointer;

    @media (max-width: 592px) {
      width: 12%;
    }
  }

  @media (max-width: 592px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 420px) {
    border-radius: 25px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  white-space: normal;
  margin-right: 5%;
  flex: 1;
  justify-content: center;
`;

export const Nav = styled(NavigationMenu.Root)`
  white-space: nowrap;
  flex: 1;

  > div {
    flex: 1;
    justify-content: center;
    display: flex;
    padding-top: 0.4%;
  }

  @media (max-width: 592px) {
    padding: 0.5rem;
  }
`;

export const Elementos = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  padding: 2px;
  list-style: none;
  cursor: pointer;
  gap: 5rem;

  @media (max-width: 420px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Itens = styled(NavigationMenu.Item)`
  color: white;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Link = styled(NavigationMenu.Link)`
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  font-weight: 500;
  gap: 1rem;
  color: black;

  &:hover {
    color: #c8c8c8;
  }
`;

export const Trigger = styled(NavigationMenu.Trigger)`
  background-color: white;
  border: none;
  font-size: 1.2rem;
  color: black;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #c8c8c8;
  }
`;
export const TriggerSub = styled(NavigationMenu.Trigger)`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  position: relative;

  &:hover {
    color: rgba(0, 202, 245, 1);
  }
`;

export const SubContent = styled(NavigationMenu.NavigationMenuSub)`
  justify-content: left;
`;

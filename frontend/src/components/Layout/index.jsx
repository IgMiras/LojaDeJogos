import React from "react";

import { LayoutContainer } from "./style";
import { NavBar, NavBarTeste } from "../Navbar/index";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavBar />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

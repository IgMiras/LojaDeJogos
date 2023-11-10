import React from "react";

import { LayoutContainer } from "./style";
import { NavBar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavBar />
      {children}
    </LayoutContainer>
  );
};

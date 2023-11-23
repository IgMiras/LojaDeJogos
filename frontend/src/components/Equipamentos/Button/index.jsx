import React, { CSSProperties } from "react";

import { StyledButton } from "./style";

export const Button = ({ children, onClick, height }) => {
  return (
    <StyledButton onClick={onClick} height={height}>
      {children}
    </StyledButton>
  );
};

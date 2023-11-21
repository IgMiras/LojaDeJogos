import React, { CSSProperties } from "react";

import { StyledButton } from "./style";

export const Button = ({
  children,
  onClick,
  background,
  color,
  activeBackground,
  height,
  style,
  className,
}) => {
  return (
    <StyledButton
      style={style}
      className={className}
      activeBackground={activeBackground}
      background={background}
      color={color}
      onClick={onClick}
      height={height}
    >
      {children}
    </StyledButton>
  );
};

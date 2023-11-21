import React from "react";

import { Container } from "./style";

export const Input = ({
  type,
  placeHolder,
  width,
  height,
  label,
  onChange,
}) => {
  return (
    <Container>
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        width={width}
        height={height}
        onChange={onChange}
      />
    </Container>
  );
};

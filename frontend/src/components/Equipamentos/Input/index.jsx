import React from "react";

import { Container } from "./style";

export const Input = ({
  type,
  name,
  id,
  placeHolder,
  width,
  height,
  label,
}) => {
  return (
    <Container>
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        width={width}
        height={height}
      />
    </Container>
  );
};

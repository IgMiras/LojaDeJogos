import React from "react";

import { Container } from "./style";

export const Input = ({
  children,
  value,
  type,
  name,
  id,
  placeHolder,
  width,
}) => {
  return (
    <Container>
      <label htmlFor="name">{children}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeHolder}
        width={width}
      />
    </Container>
  );
};

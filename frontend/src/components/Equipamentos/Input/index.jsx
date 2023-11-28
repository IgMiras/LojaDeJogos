import React from "react";

import { Container } from "./style";

export const Input = ({
  type,
  name,
  id,
  placeHolder,
  width,
  height,
  onChange,
  value,
}) => {
  return (
    <Container>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        width={width}
        height={height}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};

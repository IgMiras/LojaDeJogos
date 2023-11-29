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
  const inputStyle = {
    width: width,
    height: height,
  };

  return (
    <Container>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        style={inputStyle}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};

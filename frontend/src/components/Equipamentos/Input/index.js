import React from "react";

import { Container } from "./style";

export const Input = ({ type, placeHolder, label, onChange }) => {
  return (
    <Container>
      <label htmlFor="name">{label}</label>
      <input type={type} placeholder={placeHolder} onChange={onChange} />
    </Container>
  );
};

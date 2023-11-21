import React from "react";
import { ConteudoPopupComponent } from "./style";

export const ConteudoPopup = ({ width, top, left, children }) => {
  return (
    <ConteudoPopupComponent width={width} top={top} left={left}>
      {children}
    </ConteudoPopupComponent>
  );
};

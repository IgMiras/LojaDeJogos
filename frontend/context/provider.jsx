import React, { Children, useState } from "react";
import { propTypes } from "prop-types";
import AppContext from "./context";
import { QuantidadeProvider } from "./quantContext";

function Provider({ children }) {
  const [jogos, setJogos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const valor = {
    jogos,
    setJogos,
    cartItems,
    setCartItems,
  };
  return (
    <AppContext.Provider value={valor}>
      <QuantidadeProvider>{children}</QuantidadeProvider>
    </AppContext.Provider>
  );
}
export default Provider;

// Provider.propTypes = {
//   children: propTypes.any,
// }.isRequired;

// QuantidadeProvider.js
import { createContext, useContext, useState } from "react";

const QuantidadeContext = createContext();

export function useQuantidade() {
  return useContext(QuantidadeContext);
}

export function QuantidadeProvider({ children }) {
  const [quantidades, setQuantidades] = useState({});

  const getQuantidade = (id) => {
    return quantidades[id] || 0;
  };

  const incrementarQuantidade = (id) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [id]: (prevQuantidades[id] || 0) + 1,
    }));
  };

  const decrementarQuantidade = (id) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [id]: Math.max((prevQuantidades[id] || 0) - 1, 0),
    }));
  };

  const contextoValor = {
    getQuantidade,
    incrementarQuantidade,
    decrementarQuantidade,
  };

  return (
    <QuantidadeContext.Provider value={contextoValor}>
      {children}
    </QuantidadeContext.Provider>
  );
}

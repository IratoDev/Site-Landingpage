import React, { useState, useEffect, createContext, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

//instale o npm install react-intersection-observer

// Criação do contexto
export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [elements, setElements] = useState({});
  const [ButtonMenu, setButtonMenu] = useState(false);

  // Usando useCallback para garantir que as funções sejam estáveis
  const registerElement = useCallback((id) => {
    setElements((prev) => ({ ...prev, [id]: false }));
  }, []);

  const updateElementVisibility = useCallback((id, isVisible) => {
    setElements((prev) => ({ ...prev, [id]: isVisible }));
  }, []);

  return (
    <MyContext.Provider value={{ elements, ButtonMenu, setButtonMenu, registerElement, updateElementVisibility }}>
      {children}
    </MyContext.Provider>
  );
};

// ObservedElement movido para fora do contexto
export const ObservedElement = ({ id, children }) => {
  const { registerElement, updateElementVisibility, elements } = React.useContext(MyContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    registerElement(id);
  }, [id, registerElement]);

  useEffect(() => {
    if (inView) {
      updateElementVisibility(id, true);
      console.log("view disparado");
    }
  }, [inView, id, updateElementVisibility]);

  return (
    <div ref={ref} className={elements[id] ? 'element visible' : 'element'}>
      {children}
    </div>
  );
};

export const useMyContext = () => React.useContext(MyContext);

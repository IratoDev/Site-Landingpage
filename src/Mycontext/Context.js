import React, { useState, useEffect, createContext, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

//instale o npm install react-intersection-observer

// Criação do contexto
export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [elements, setElements] = useState({});
  const [ButtonMenu, setButtonMenu] = useState(false);
  const [Focus, setFocus]=useState("btn1");
  const[CurrentItem, setCurrentItem] = useState(0);

  // Usando useCallback para garantir que as funções sejam estáveis
  const registerElement = useCallback((id) => {
    setElements((prev) => ({ ...prev, [id]: false }));
  }, []);

  const updateElementVisibility = useCallback((id, isVisible) => {
    setElements((prev) => ({ ...prev, [id]: isVisible }));
  }, []);

  return (
    <MyContext.Provider value={{ elements, ButtonMenu, setButtonMenu, registerElement, updateElementVisibility,Focus, setFocus, CurrentItem, setCurrentItem }}>
      {children}
    </MyContext.Provider>
  );
};

// ObservedElement
export const ObservedElement = ({ id, children }) => {
  const { registerElement, updateElementVisibility, elements, setFocus } = React.useContext(MyContext);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    registerElement(id);
  }, [id, registerElement]);

  useEffect(() => {
    if (inView) {
      updateElementVisibility(id, true);

      switch (id) {
          case'element1':
          setFocus('btn1'); 
          break;
          case'element2':
          setFocus('btn2');
          break;
          case 'element3':
          setFocus('btn3'); 
          break;
          case'element4':
          setFocus('btn4');
          break;
          case 'element5':
          setFocus('btn5'); 
          break;
          case'element6':
          setFocus('btn6');
          break;
          case 'element7':
          setFocus('btn7');
          break;
        
        default:
          setFocus('default');
          break;
      }

    }
  }, [inView, id, updateElementVisibility, setFocus]);

console.log(elements)

  return (
    <div ref={ref} className={elements[id] ? 'element visible' : 'element'}>
      {children}
    </div>
  );
};

export const useMyContext = () => React.useContext(MyContext);

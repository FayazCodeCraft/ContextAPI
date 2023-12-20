import { ReactNode, useState } from "react";
import { CounterContext } from "./CounterContext";

interface CounterContextProviderProps{
    children:ReactNode;
}

function CounterContextProvider({children}:CounterContextProviderProps) {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider

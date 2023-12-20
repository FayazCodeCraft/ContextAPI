import { createContext, useContext } from "react";

interface CounterContextProps {
    count: number;
    increment: () => void;
    decrement: () => void;
}
export const CounterContext = createContext<CounterContextProps | undefined>(undefined);

export const useCounter = (): CounterContextProps => {
    const context = useContext(CounterContext);
    if (!context) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  };
  
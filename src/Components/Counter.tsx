import React from 'react';
import { useCounter } from '../context/CounterContext';
import CounterControls from './CounterControllers';


const Counter: React.FC = () => {
  const { count } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <CounterControls />
    </div>
  );
};

export default Counter;

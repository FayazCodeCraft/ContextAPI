import React from 'react';
import { useCounter } from '../context/CounterContext';


const CounterControls: React.FC = () => {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button className='border-2 border-red-600 bg-black text-white mr-5' onClick={increment}>Increment</button>
      <button className="border-2 border-red-600 bg-black text-white mr-5" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterControls;

import CounterControls from './CounterControls';

interface CounterProps{
  count:number;
  onIncrement:()=>void;
  onDecrement:()=>void;
}

const Counter = ({ count, onIncrement, onDecrement }:CounterProps) => {
  return (
    <div>
      <p>Count: {count}</p>
      <CounterControls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

export default Counter;

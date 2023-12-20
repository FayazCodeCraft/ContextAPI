interface CounterControlsProps{
    onIncrement:()=>void;
    onDecrement:()=>void;
  }

const CounterControls = ({ onIncrement, onDecrement }:CounterControlsProps) => {
  return (
    <div >
      <button className="border-2 border-red-700 bg-black text-white mr-5 mt-5" onClick={onIncrement}>Increment</button>
      <button className="border-2 border-red-700 bg-black text-white" onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default CounterControls;

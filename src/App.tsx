import { useState } from "react";
import Counter from "./Components/Counter";


const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Simple Counter App</h1>
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};

export default App;

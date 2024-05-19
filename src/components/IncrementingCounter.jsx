import React, { useState, useEffect } from 'react';
  
const IncrementingCounter = ({ step = 1, delay = 500, max = Infinity }) => {
  const [count, setCount] = useState(0);
  const [lastClicked, setLastClicked] = useState(null);
  
  const handleIncrement = () => {
    if (count + step <= max) {
      setCount(count + step);
    }
  };

  const handleDecrement = () => {
    if (count - step >= 0) {
      setCount(count - step);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const delayedAction = (action) => {
    if (!lastClicked || Date.now() - lastClicked >= delay) {
      action();
      setLastClicked(Date.now());
    }
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => delayedAction(handleIncrement)}>Increment</button>
      <button onClick={() => delayedAction(handleDecrement)}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};


export default IncrementingCounter;

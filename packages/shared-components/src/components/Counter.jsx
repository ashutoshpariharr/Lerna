import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("State Changed:", count);
  }, [count]);

  const updateState = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="container">

      <h1>Click For Count</h1>
      <h1>{count}</h1>

      <div className="card">

        <button onClick={() => updateState(count + 1)}>Add</button>

        <p>Data come from one app to another app</p>

      </div>

    </div>
  );
}

export default Counter;

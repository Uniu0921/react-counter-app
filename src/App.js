import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = (num) => {
    if (count + num <= 100) {
      setCount(count + num);
    }
  };

  const decrease = (num) => {
    if (count - num >= 0) {
      setCount(count - num);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>カウンター</h1>
      <h2>{count}</h2>

      <button onClick={() => increase(1)}>+1</button>
      <button onClick={() => decrease(1)}>-1</button>

      <br /><br />

      <button onClick={() => increase(10)}>+10</button>
      <button onClick={() => decrease(10)}>-10</button>

      <br /><br />

      <button onClick={reset}>リセット</button>
    </div>
  );
}

export default App;

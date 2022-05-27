import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const setNumber = (e) => {
    setNum(num + e);
  };
  return (
    <div className="App">
      <h1>WEEK 6 REACT COUNT NUMBER</h1>
      <h3>{num}</h3>
      <button
        onClick={() => {
          setNumber(1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(-1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;

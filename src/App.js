import React, { useState } from "react";
import "./App.css";

function App() {
const [count, setCount] = useState(0); 
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <center>
      <button onClick={incrementCount}>Click Here</button><br></br>
      <h1 style={{color:"blue"}}>{count}</h1>
      </center>
    </div>
  );
}

export default App

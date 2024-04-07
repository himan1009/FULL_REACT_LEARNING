import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter=15
  const addValue = () => {
    // counter=counter+1
    if (counter < 20) setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div id="root">
      <h1>HELLO</h1>
      <h2>COUNTER VALUE : {counter}</h2>
      <button onClick={addValue}>ADD VALUE - {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>REMOVE VALUE - {counter}</button>
    </div>
  );
}

export default App;

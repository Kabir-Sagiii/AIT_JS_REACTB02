import "./Counter.css";
import { useState } from "react";
function Counter() {
  let [state, setState] = useState(0);
  console.log("Re-rendering");

  function increaseCount() {
    setState((prevState) => {
      return prevState + 1;
    }); //1

    setState((prevState) => {
      return prevState + 2;
    }); //3

    setState((prevState) => {
      return prevState + 3; //6
    });
  }

  return (
    <div className="counter">
      <h2>Count Value is {state}</h2>

      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Counter;

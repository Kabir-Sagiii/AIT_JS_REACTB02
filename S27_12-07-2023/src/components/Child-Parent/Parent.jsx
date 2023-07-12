import { useState } from "react";
import Child from "./Child";

var parentstyle = {
  width: "500px",
  margin: "100px auto ",
  padding: "5px",
  textAlign: "center",
  boxShadow: "0 0 10px black",
};
function Parent(props) {
  const [state, setState] = useState("Child Data");

  const updateState = (data) => {
    setState(data);
  };

  return (
    <div style={parentstyle}>
      <h2>Parent Component</h2>
      <p>
        Child Data : <span style={{ color: "red" }}>{state}</span>
      </p>
      <Child updateState={updateState} />
    </div>
  );
}

export default Parent;

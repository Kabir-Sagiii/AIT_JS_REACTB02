import { useState } from "react";
import B from "./B";
import childcontext from "./childContext";

function A(props) {
  const [parentstate, setParentState] = useState("");
  const updateState = (data) => {
    setParentState(data);
  };
  return (
    <div>
      <h2>A Component</h2>
      <p>
        Child Data :{" "}
        <span style={{ color: "red", fontSize: "22px" }}>{parentstate}</span>
      </p>
      <childcontext.Provider value={{ updateState: updateState }}>
        <B />
      </childcontext.Provider>
    </div>
  );
}

export default A;

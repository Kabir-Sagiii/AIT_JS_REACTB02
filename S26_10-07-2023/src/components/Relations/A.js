import { useState } from "react";
import B from "./B";

function A(props) {
  const [state, setState] = useState("Data of A Component");
  return (
    <div
      style={{
        width: "500px",
        padding: "10px",
        margin: "50px auto",
        boxShadow: "0 0 10px red",
      }}
    >
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState("Data Updated");
        }}
      >
        Update the data
      </button>
      <B data={state} />
    </div>
  );
}

export default A;

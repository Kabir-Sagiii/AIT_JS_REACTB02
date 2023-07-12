import { useContext, useState } from "react";
import childcontext from "./childContext";

function D(props) {
  const [childstate, setChildState] = useState();
  const { updateState } = useContext(childcontext);
  return (
    <div>
      <h2>D Component</h2>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => {
          setChildState(e.target.value);
        }}
      />
      <button
        onClick={() => {
          updateState(childstate);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default D;

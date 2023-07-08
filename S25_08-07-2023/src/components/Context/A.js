import { useState } from "react";
import B from "./B";
import myContext from "./context";

function A(props) {
  const [state, setState] = useState("Delhi");
  return (
    <div>
      <h2>A Component</h2>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;

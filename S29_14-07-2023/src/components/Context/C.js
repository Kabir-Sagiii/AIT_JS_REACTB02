import { useContext } from "react";
import myContext from "./context";
import D from "./D";

function C(props) {
  let info = useContext(myContext);
  return (
    <div>
      <h2>C Component : {info}</h2>
      <D />
    </div>
  );
}

export default C;

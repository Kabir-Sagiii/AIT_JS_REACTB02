import { useContext } from "react";
import myContext from "./context";

function D(props) {
  let data = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>
      <p>City :{data} </p>
    </div>
  );
}

export default D;

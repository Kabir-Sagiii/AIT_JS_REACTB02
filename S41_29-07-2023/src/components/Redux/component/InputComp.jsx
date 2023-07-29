import { useState } from "react";
import myStore from "../store/store";

function InputComp(props) {
  const [state, setState] = useState("");
  const sendDataToDispatch = () => {
    var actionObj = {
      type: "NAME",
      payload: state,
    };

    myStore.dispatch(actionObj);
  };
  return (
    <div className="mt-5 text-center">
      <h4>Input Component</h4>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button className="btn btn-primary mx-2" onClick={sendDataToDispatch}>
        Submit
      </button>
    </div>
  );
}

export default InputComp;

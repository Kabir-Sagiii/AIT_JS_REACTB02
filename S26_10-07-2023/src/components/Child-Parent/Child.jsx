import { useState } from "react";
var childstyle = {
  width: "300px",
  margin: "30px auto ",
  padding: "30px",
  textAlign: "center",
  boxShadow: "0 0 10px red",
};
function Child(props) {
  const [childstate, setChildState] = useState();
  const sendDataToParent = () => {
    props.updateState(childstate);
  };
  return (
    <div style={childstyle}>
      <h2>Child Component</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setChildState(e.target.value);
        }}
      />
      <button onClick={sendDataToParent}>Submit</button>
    </div>
  );
}

export default Child;

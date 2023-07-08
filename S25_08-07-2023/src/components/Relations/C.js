import React from "react";

function C({ data }) {
  return (
    <div
      style={{
        width: "300px",
        padding: "10px",
        margin: "50px auto",
        boxShadow: "0 0 10px green",
      }}
    >
      <h2>C Component</h2>
      <p>{data}</p>
    </div>
  );
}

export default C;

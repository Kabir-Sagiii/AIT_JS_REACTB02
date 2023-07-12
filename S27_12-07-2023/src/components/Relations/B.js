import React from "react";
import C from "./C";

function B({ data }) {
  return (
    <div
      style={{
        width: "400px",
        padding: "10px",
        margin: "50px auto",
        boxShadow: "0 0 10px black",
      }}
    >
      <h2>B Component </h2>
      <C data={data} />
    </div>
  );
}

export default B;

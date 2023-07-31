import React from "react";
import InputComp from "./InputComp";
import City from "./City";
import Info from "./Info";

function ReduxHome(props) {
  return (
    <div>
      <InputComp />
      <City />
      <Info />
    </div>
  );
}

export default ReduxHome;

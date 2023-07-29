import React from "react";
import { UseSelector, useSelector } from "react-redux";

function Info(props) {
  let storedata = useSelector((data) => {
    return data;
  });
  return (
    <div className="container mt-5 text-center">
      <h4>Information of the User</h4>
      <p className=" lead ">
        User name is{" "}
        <span className="text-primary fw-bolder">{storedata.name}</span> and he
        / she is from{" "}
        <span className="text-primary fw-bolder">{storedata.city}</span> city
      </p>
    </div>
  );
}

export default Info;

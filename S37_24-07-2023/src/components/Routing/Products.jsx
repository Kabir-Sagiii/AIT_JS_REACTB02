import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products(props) {
  return (
    <div
      className="container mt-5"
      style={{ boxShadow: "0 0 10px black", height: "400px", width: "1000px" }}
    >
      <div className="row  h-100">
        <div
          className="col-3 bg-dark text-white"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link to="electronics" className="text-white text-decoration-none">
            Electronics
          </Link>
          <Link to="jewelery" className="text-white text-decoration-none">
            Jewelery
          </Link>
          <Link to="#" className="text-white text-decoration-none">
            Men'sClothing
          </Link>
          <Link to="#" className="text-white text-decoration-none">
            Women'sClothing
          </Link>
        </div>
        <div className="col-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Products;

import React from "react";

function Search(props) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h3 className="text-primary">Github Search</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            placeholder="Enter Github User Name"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-outline-primary px-5">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;

import React from "react";

function Table(props) {
  return (
    <div className="text-center">
      <table
        className="table table-striped  w-50 table-hover table-bordered"
        style={{ margin: "auto" }}
      >
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>101</td>
            <td>Rahul Verma</td>
            <td>Rahul@gmail.com</td>
            <td>Delhi</td>
          </tr>
          <tr>
            <td>101</td>
            <td>Rahul Verma</td>
            <td>Rahul@gmail.com</td>
            <td>Delhi</td>
          </tr>
          <tr>
            <td>101</td>
            <td>Rahul Verma</td>
            <td>Rahul@gmail.com</td>
            <td>Delhi</td>
          </tr>
          <tr className="">
            <td>101</td>
            <td>Rahul Verma</td>
            <td>Rahul@gmail.com</td>
            <td>Delhi</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

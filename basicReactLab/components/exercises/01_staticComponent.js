import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <>
      <h1>Web App development</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>module-1</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>module-2</td>
            <td>3</td>
            <td>2</td>
          </tr>
        </tbody >
    </table>
    </>
  );
};

export default Demo;

import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  const modulesList = props.modules.map((module, index) => (
    <tr>
      <td>{props.modules[index].name}</td>
      <td>{props.modules[index].noLectures}</td>
      <td>{props.modules[index].noPracticals}</td>
    </tr>
  ))
  return (
    <>
      <h1>{props.course}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody >
          {modulesList}
        </tbody >
    </table>
    </>
  );
};

export default Demo;

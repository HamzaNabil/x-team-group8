import React from "react";

function Data(props) {
  console.log(props.x); // [{}, {}]
  return (
    <div>
      <h1>DATA Component</h1>
      {props.x.map(function (item) {
        return <h2> {item.name}</h2>;
      })}
    </div>
  );
}

export default Data;

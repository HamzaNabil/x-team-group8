import React from "react";

function Home(props) {
  console.log(props);
  return (
    <div>
      {/* [1,2,3] */}
      {props.info.map(function (item) {
        return <p> {item} </p>;
      })}
      <h1>Home Comp</h1>
      <p>This is Home Comp</p>
    </div>
  );
}

export default Home;

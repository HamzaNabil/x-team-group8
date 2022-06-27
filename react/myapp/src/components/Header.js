import React, { useState } from "react";
import "./Header.css";

// How to write State in function Component
// props => object props: {txt: header1. x:1 ,y: 2}
// Note: dont print object in jsx
function Header(props) {
  let [header, setHeader] = useState("");

  return (
    <h1 className="header">
      {props.txt} - {props.hamada}
    </h1>
  );
}

export default Header;

// <Header txt="Header 1" />
// <Header txt="Header 2" />
// <Header txt="Header 3" />

// Create Component = function

// Component = part of website [ header , footer ,sidebar , button, a , img, section, icon]
// pages = Home - About - Contact - Products - Features

import React, { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Data from "./components/Data";
import Login from "./components/Login";
// Hooks => functions
// Props is data passed from parent comp to child comp
// State is object hold data related to the component

// State => private
// Props => Public

function App() {
  let [text, setText] = useState("App Component");
  let [count, setCount] = useState(0);
  let [products, setProducts] = useState([{ name: "lab" }, { name: "mouse" }]);

  let handleClick = function () {
    setText("App Comp 2");
  };

  let handleIncrease = function () {
    setCount(count + 1);
  };
  let handleDecrease = function () {
    setCount(count - 1);
  };

  let handleAddProduct = function () {
    setProducts([...products, { name: "keyboard" }]);
  };

  return (
    <>
      {/* <Header txt="This is header 1" hamada={text} />
      <h1> {text} </h1>
      <button onClick={handleClick}> change text </button>
      <hr />

      <p>{count}</p>
      <button onClick={handleIncrease}> +1 </button>
      <button onClick={handleDecrease}> -1 </button>

      <hr />
      <Data x={products} />

      <button onClick={handleAddProduct}> Add New Item</button>
      <hr /> */}
      <Home />
      <Login />
    </>
  );
}

export default App;

// App() => Js
// <App /> => React

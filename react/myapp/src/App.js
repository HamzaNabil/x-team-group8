// Create Component = function

// Component = part of website [ header , footer ,sidebar , button, a , img, section, icon]
// pages = Home - About - Contact - Products - Features

import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

// Props is data passed from parent comp to child comp

function App() {
  return (
    <div>
      <Header txt="This is header 1" />
      <Header txt="This is header 2" />
      <Header txt="This is header 3" />
      <h1>App Component</h1>
      <p>This is P</p>
      <span>This is span</span>
      <Home info={[1, 2, 3]} />
      <About vl="About 1" x="1" y="2" />
      <About vl="About 2" />
    </div>
  );
}

export default App;

// App() => Js
// <App /> => React

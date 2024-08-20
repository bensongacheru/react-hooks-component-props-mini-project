import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Article from "./Article";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About />
      <Article />
    </div>
  );
}

export default App;



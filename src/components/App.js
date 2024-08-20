import React from "react";
import blogData from "../data/blog";

console.log(blogData);
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"; // Ensure this path is correct
import blogData from "../data/blog"; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList articles={blogData.posts} /> {/* Ensure posts is the correct data */}
    </div>
  );
}
export default App;




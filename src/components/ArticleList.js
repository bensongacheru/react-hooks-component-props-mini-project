import React from "react";
import blogData from "../data/blog";

const ArticleList = () => {
  return (
    <main>
      {blogData.posts.map(
        ({ id, title, date = "January 1, 1970", preview }) => (
          <article key={id}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
          </article>
        )
      )}
    </main>
  );
};

export default ArticleList;

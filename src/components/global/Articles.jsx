import React, { useEffect, useState } from "react";
import axios from "axios";
import server from "./Config";

function Articles({ article }) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticle] = useState([]);

  function deleteArticle(e) {
    e.preventDefault();

    const deletePickedArticle = async () => {
      const response = await axios.delete(
        `${server}/api/Articles/${article.id}`,
        {}
      );
      console.log(response);
    };
    deletePickedArticle();
  }

  console.log(article.id);
  console.log(article);
  return (
    <>
      <div className="article-flex">
        <div className="article-flex-2">
          <h3>
            Author :<br />
            {article.attributes.author}
          </h3>
          <h3>
            Title : <br />
            {article.attributes.title}
          </h3>
          Description : {article.attributes.description}
        </div>
        <button onClick={deleteArticle}>Delete article</button>
      </div>
    </>
  );
}

export default Articles;

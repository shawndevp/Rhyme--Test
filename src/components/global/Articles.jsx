import React, { useEffect, useState } from 'react'
import axios from "axios";
import server from "./Config";
import Home from "./Home";

function Articles() {
  const useGetArticles = () => {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState([]);

    const getArticle = async () => {
      try {
        const response = await axios.get(`${server}/api/Articles`);
        console.log(response)
        setArticle(response.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    useEffect(() => {
      getArticle();
    }, []);

    return {
      loading,
      article,
    };
  };

  const { loading, article } = useGetArticles();

  return (
    <>
      {!loading ? (
        <Home hasArticle={article.hasArticle} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Articles;

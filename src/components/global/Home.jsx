import React, { useEffect, useState } from 'react'
import axios from "axios";
import server from "./Config";
import Articles from "./Articles";

function Home() {
  const useGetArticles = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticle] = useState([]);

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
      articles,
    };
  };

  const { loading, articles } = useGetArticles();

  function deleteArticle(e) {
    e.preventDefault();
    if(!loading && articles.data !== 0) {

      const articleId = articles.data;
      console.log(articleId);

      //will not be able to finish due to time but should get the ID of the specific "row" and then delete it on a "onClick" with deleteArticle as a function. 
      
      const deletePickedArticle = async () => {
        const response = await axios.delete(
          `${server}/api/Articles/${articleId}`,
          {}
        )
      }
      deletePickedArticle();
    }
    }



  if(!loading) {
      console.log(articles)
  }
  return (
    <>
            <div className="home-page">
            <div className="H1-wrapper">
            <h1>Articles listed:</h1>
            </div>
            <div className="home-page-wrapper">
            {!loading ? (
          Object.entries(articles.data).map(([key, article]) => {
            return(
                <Articles article={article} />
            )
              
          })
      ) : (
        <></>
      )}
            </div>

        </div>
    </>
  );
}

export default Home;

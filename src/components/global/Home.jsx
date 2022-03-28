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

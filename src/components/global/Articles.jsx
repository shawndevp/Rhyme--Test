import React, { useEffect, useState } from 'react'
import axios from "axios";

function Articles({article}) {

    console.log(article)
    return (
        <>
        <div className="article-flex">
            <div className="article-flex-2">
            <h3>Author :<br/>{article.attributes.author}</h3> 
            <h3>Title : <br/>{article.attributes.title}</h3>
            Description : {article.attributes.description}<br/><br/><br/>
            </div>
        </div>
        </>
    )
}

export default Articles

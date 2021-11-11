import React from 'react'
import { useParams } from 'react-router-dom';

import articlesContent from './article-content';

const Article = () => {
  
  const { name } = useParams();
  const article = articlesContent.find((article)=> article.name === name);
  if(!article) { return( <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-2 text-red-600" > ERROR: Article {name} Does Not Exist</h1> )}
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-2 text-gray-900">
        { article.title }
      </h1>
      {article.content.map((paragraph, index) =>(
        <p className="mx-auto leading-relaxed text-base mb-4">{paragraph}</p>
      ))}
    </>
  )
}

export default Article

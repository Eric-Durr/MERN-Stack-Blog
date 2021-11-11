import React from 'react';
import {Link} from 'react-router-dom';
import articlesContent from './article-content';

const ArticlesList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-2 text-gray-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articlesContent.map((article, index) =>(
            <div key={index} className="p-4 md:w-1/2">
              <div className="
              h-full 
              bg-green-50
              border-2 
              border-gray-200 
              border-opacity-60 
              rounded-lg
              overflow-hidden">
                <Link to={`/article/${article.name}`}>
                  <img 
                  className="
                  lg:h-48 
                  md:h-36 
                  w-full o
                  bject-cover 
                  object-center" 
                  src={article.thumbnail} 
                  alt="blog" />
                </Link>  
                <div className="p-6">
                  <Link key={index} to={`/article/${article.name}`}>
                  <h3 className="title-font text-xl font-medium text-gray-900 mb-4">{article.title}</h3>
                  </Link>
                  <p className="leading-relaxed mb-3 text-gray-600">{article.content[0].substring(0,125)} ...</p>
                  <div className="flex item-center flex-wrap">
                    <Link 
                     className="text-indigo-700 inline-flex items-center md:mb-2 ls:mb-0"
                     to={`/article/${article.name}`}>
                       Learn more ...
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ArticlesList

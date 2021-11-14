import "whatwg-fetch" // In order to make fetch work in 
                      // IE we have to install this package

import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import articlesContent from './article-content';
import Articles from '../components/Articles';
import NoMatch from './NoMatch';
import CommentsList from "../components/CommentsList";

const Article = () => {
  const { name } = useParams();
  const article = articlesContent.find((article)=> article.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: []});

  useEffect(() => {

    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
      console.log(body)
    }
    fetchData();
  }, [name]);

  if(!article) { return( <NoMatch/> )}
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-2 text-gray-900">
        { article.title }
      </h1>
      {article.content.map((paragraph, index) =>(
        <p className="mx-auto leading-relaxed text-base mb-4">{paragraph}</p>
      ))}
        <CommentsList comments={ !articleInfo ? null : articleInfo.comments} />
      
      <h1 className="sm:text-2x text-xl font-bold mt-12 mb-4 text-gray-900">Other articles</h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={articlesContent.filter(article => article.name !== name )}/>
      </div>  
    </>
  )
}

export default Article

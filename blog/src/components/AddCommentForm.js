import React, {useState} from 'react';

 const AddCommentForm = ( {articleName, setArticleInfo}) => {
  
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  
  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "post",
      body: JSON.stringify({username, text: commentText}),
      headers: {
        "Content-Type" : "application/json"
      },
    });
    const body = await result.json();
    console.log(body);
    await sleep(20000);
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  }
  
  return (
    <form className="shadow rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900" >Add a comment</h3>
      <label className="block text-gray-700 text-sm font-bold mb-2">Name :</label>
      <input 
        type="text"
        className="shadow 
                   appearance-none 
                   border 
                   rounded 
                   w-full 
                   py-2 
                   px-3
                   text-gray-700 
                   leading-tight
                   focus:outline-none
                   focus:shaow-outline" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
      <label className="block text-gray-700 text-sm font-bold mb-2">Comment :</label>
      <textarea 
        rows="4"
        cols="50"
        className="shadow 
                   appearance-none 
                   border 
                   rounded 
                   w-full 
                   py-2 
                   px-3
                   text-gray-700 
                   leading-tight
                   focus:outline-none
                   focus:shaow-outline" 
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}/>
      <button 
        onClick={()=>addComment()}
        className="bg-blue-500 
                   over:bg-blue-700 
                   text-white
                   font-bold
                   py-2
                   px-4
                   rounded
                   focus:outline-none focus:shadow-outline">
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
import React, {useContext, useEffect, useState} from 'react';
import PostContext from './PostContext';
import Card from './Card';

import { Provider } from 'react-redux';
import store from './store';
import { useSelector, useDispatch } from 'react-redux';
import {loadPosts, removePost, setCurrentPage} from './actions';

import './App.css';

function App() {

const [posts, setPosts] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
  const fetchData = async () =>{
    setLoading(true);
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    }catch(error){
      setError(error);
    }finally{
      setLoading(false);
    }
  };
  fetchData();
},[]);

  // const dispatch = useDispatch();
  // const {posts, loading, error, currentPage} = useSelector((state)=>state.posts);
  // const {posts, loading, error, currentPage,removePost,setCurrentPage} = useContext((state)=>PostContext)

  // useEffect(()=>{
  //   dispatch(loadPosts());
  // },[dispatch]);

  const handleRemove = (postId) =>{
    // dispatch(removePost(postId));
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handlePagechange =(page) =>{
    // dispatch(setCurrentPage(page));
    setCurrentPage(page);
  };

  // if(loading){
  //   return <div>Loading...</div>
  // }
  // if(error){
  //   return <div>Error : {error.message}</div>
  // }

  const startIndex = (currentPage-1)*6;
  const endIndex = startIndex + 6;
  const currentPosts = posts.slice(startIndex, endIndex);

  const totalPage = Math.ceil(posts.length / 6);
  // const fetchData = fetchData;
  return (
    <PostContext.Provider 
      value={{
        posts,
        currentPage,
        loading,
        error,
        // fetchPosts: fetchData,
        removePost: handleRemove,
        setCurrentPage: handlePagechange,
      }}>{/* store={store} */}
      <div className='card-container'>
        {currentPosts.map((post)=>(
          <Card key={post.id} post={post} onRemove={handleRemove} />
        ))}
      </div>
      <div className='pagination'>
        {/* {Display pagination button} */}
        <button onClick={() => handlePagechange(currentPage - 1 )} disabled= {currentPage === 1}>
            Previous
        </button>
        {Array.from({length:totalPage},(_,i)=> i+1).map((page)=>(
          <button key={page} onClick={() => handlePagechange(page)}>
            {page}
          </button>
        ))}
        <button onClick={() =>handlePagechange(currentPage +1 )} disabled ={currentPage === totalPage}>
          Next
        </button>
      </div>
    </PostContext.Provider>
  );
}

export default App;

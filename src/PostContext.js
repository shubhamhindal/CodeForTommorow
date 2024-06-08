import React, {createContext, useContext} from 'react'
import fetchPosts from './fetchPosts';
import { removePost, setCurrentPage } from './actions';

const PostContext = createContext ({
    posts : [],
    currentPage :  1,
    loading : true,
    error : null,
    fetchPosts : () =>{},
    removePost : () =>{}, 
    setCurrentPage : () =>{}, 

//   return (
//     <div>

//     </div>
});

export default PostContext
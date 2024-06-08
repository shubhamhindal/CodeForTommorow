import React from 'react'
import fetchPosts from './fetchPosts'

export const fetchPostsRequest = () =>({type:'FETCH_POSTS_REQUESTS'});
export const fetchPostsSuccess = (posts) =>({type:'FETCH_POSTS_SUCCESS', payload: posts});
export const fetchPostsFailure = (error) =>({type:'FETCH_POSTS_FAILURE', payload: error});

export const removePost = (postId) =>({type:'REMOVE_POST',payload: postId});
export const setCurrentPage = (page) =>({type:'SET_CURRENT_PAGE',payload: page});


export const loadPosts = () => async (dispatch) =>{
    dispatch(fetchPostsRequest());
    try{
        const posts = await fetchPosts();
        dispatch(fetchPostsSuccess(posts));
    } catch(error){
        dispatch(fetchPostsFailure(error));
    }
};



const actions = () => {
  return (
    <div>

    </div>
  )
}

export default actions
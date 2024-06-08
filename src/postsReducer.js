// import { type } from '@testing-library/user-event/dist/type';
// import React from 'react'

const initialState = {
    posts : [],
    currentPage : 1,
    loading : true,
    error : null,
};


const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_POSTS_REQUEST':
            return{...state, loading: true, error: null};
        case 'FETCH_POSTS_SUCCESS':
            return{
                ...state,
                loading: false,
                posts : action.payload,
                error : null
            };
        case 'FETCH_POSTS_FALURE':
            return{...state, loading: false, error: action.payload};
        case 'REMOVE_POST':
            return{...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_CURRENT_PAGE':
            return{...state, currentPage:action.payload};
        default :
            return state;
    }
//   return (
//     <div>

//     </div>
//   )
}

export default postsReducer
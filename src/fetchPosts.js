import React from 'react'
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/posts';
// import './App.css';



const fetchPosts = async() => {
    try{
        const response = await axios(url);
        return response.data;
    }
    catch(err){
        console.log('error while fetching',err);
        throw err;
    }
}

export default fetchPosts
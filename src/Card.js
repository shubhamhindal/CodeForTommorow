import React, { useEffect, useState } from "react";
import axios from "axios";
const Card = ({ post, onRemove }) => {

    const [mydata, setMyData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>
            setMyData(res.data))
    },[])


  return (
    <div class="container" style={{width:"100%",display:"flex"}}>
        <div class="cards">
            <div class="card" style={{width:"60%",display:"flex"}}>
        {mydata.map((post)=>{
            const {id,title,body}=post;
            return <div className="card" key={id} style={{width:"60%", height:"10px",display:"flex", textAlign:"center", padding :'10px'}}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        })}
      </div>
      <button onClick={() => onRemove(post.Id)}>X</button>
    </div>
    </div>
  );
};

export default Card;

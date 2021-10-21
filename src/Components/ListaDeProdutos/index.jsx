import React, {useState, useEffect} from "react";
import axios from "axios";


export default function ListaDeProdutos (){

  const [ posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://makeup-api.herokuapp.com/api/v1/products.json")
    .then((response)=>{
      setPosts(response.data)
    })
    .catch(() => {
      console.log("Api request Fail")
    })
  }, [])

  return (
    <div>
        {posts.map((post, key) =>{
          return(
            <div className="card" key={key}>
                

                
                ${/*<p>{post.brand}</p>*/}
            </div>
          )
        })}        
    </div>
  );
}
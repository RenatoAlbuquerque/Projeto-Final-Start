import React, {useState, useEffect} from "react";
import './style.scss';
import api from '../../Services/api';
import FilterList from '../FilterList';


export default function ListaDeProdutos (){
  const [posts, setPosts] = useState([])

  const updateStateOnSort = (productsList) =>{
      setPosts([...productsList])
    }

  const sliceData = (array) => {
    return array.slice(450,460)
  }

  const sliceColors = (array) => {
    if(array.length > 7) {
      let colorsArray = array.slice(0,14)
      return(
        <>
          {colorsArray.map((color, index)=>(
            <div className="CardColor" 
              key={index} 
              color={color.hex_value}
              style={{backgroundColor: `${(color.hex_value)}`}}
              >
            </div> 
          ))}
        </> 
      ) 
    }else{
      return(
        <>
          {array.map((color, index)=>(
          <div className="CardColor" 
            key={index} 
            color={color.hex_value}
            style={{backgroundColor: `${(color.hex_value)}`}}
            >
          </div> 
          ))} 
        </>
      ) 
    }
  }

  useEffect(() => {
    const getData = async()=>{
      try{
       const { data } = await api.get('/products.json')
       const sliced = sliceData(data)
       setPosts([...sliced])
      }catch(error){
        console.log(error)
      }
    }
      getData()
  }, [])

  return (
    <div>
      <FilterList products={posts && posts} updateStateOnSort={updateStateOnSort} />
      <div className="GlobalStyle">
        <div className="Global">
          {posts.length > 0 ?
            posts.map((post) =>(
              <div className="Card" key={post.id}>
                <div className="CardImage">
                  <img src={post.api_featured_image} alt={post.name}></img>
                </div>
                <div className="CardName">
                  {post.name}
                </div>
                <div className="CardBrand">
                  Marca: {post.brand}
                </div>
                <div className="CardCategory">
                  Tipo: {post.category}
                </div>
                <div className="CardPrice">
                  Preço: R${post.price}
                </div>
                <div className="CardRating">
                  Avaliação: {post.rating}
                </div>
                <div className="CardGapDetail">
                  <div className="CardFooter">
                    <div className="CardLocalColor">
                      {sliceColors(post.product_colors)}
                    </div>
                  </div>
                  <div className="CardDetail">
                      + DETALHES
                  </div>
                </div>
              </div>
            ))
          :
            <div className="loading">
              <input type="checkbox" id="check"/>
              <label for="check">
                <div class="check-icon"></div>
              </label>
            </div>
          }
          
        </div>
      </div>
    </div>
  );
}
import React, {useState, useEffect} from "react";
import * as Style from './style';
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
            <Style.CardColor 
              key={index} 
              color={color.hex_value}>
            </Style.CardColor> 
          ))}
        </> 
      ) 
    }else{
      return(
        <>
          {array.map((color, index)=>(
          <Style.CardColor 
            key={index} 
            color={color.hex_value}>
          </Style.CardColor> 
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
      <Style.GlobalStyle>
        <Style.Global>
          {posts.map((post) =>(
            <Style.Card key={post.id}>
              <Style.CardImage 
                src={post.api_featured_image} 
                alt={post.name}
              />
              <Style.CardName>
                Nome: {post.name}
              </Style.CardName>
              <Style.CardBrand>
                Marca: {post.brand}
              </Style.CardBrand>
              <Style.CardCategory>
                Tipo: {post.category}
              </Style.CardCategory>
              <Style.CardPrice>
                Preço: R${post.price}
              </Style.CardPrice>
              <Style.CardRating>
                Avaliação: {post.rating}
              </Style.CardRating>
              <Style.CardGapDetail>
                <Style.CardFooter>
                  <Style.CardLocalColor>
                    {sliceColors(post.product_colors)}
                  </Style.CardLocalColor>
                </Style.CardFooter>
                <Style.CardDetail>
                    + DETALHES
                </Style.CardDetail>
              </Style.CardGapDetail>
            </Style.Card>
          ))} 
        </Style.Global>
      </Style.GlobalStyle>
    </div>
  );
}
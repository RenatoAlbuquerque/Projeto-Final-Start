import React from "react";
import './style.css';
import { AiFillStar, AiOutlineStar, AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai";


export default function FilterList ({products, updateStateOnSort}){

  const filterByMinPrice = () =>{
    const sortedArray = products.sort((a,b)=>{
      if (parseInt(a.price) < parseInt(b.price)){
        return -1;
      }
      else if(parseInt(a.price) > parseInt(b.price)){
        return 1;
      }
      return 0;
    })
    updateStateOnSort(sortedArray)
  }

  const filterByMaxPrice = () =>{
    const sortedArray = products.sort((a,b)=>{
      if (parseInt(a.price) > parseInt(b.price)){
        return -1;
      }
      else if(parseInt(a.price) < parseInt(b.price)){
        return 1;
      }
      return 0;
    })
    updateStateOnSort(sortedArray)
  }

  const filterByMaxRating = () =>{
    const sortedArray = products.sort((a,b)=>{
      if (a.rating !== null && b.rating !== null){
        if(parseInt(a.rating) > parseInt(b.rating)){
          return -1;
        }else if(parseInt(a.rating) < parseInt(b.rating)){
          return 1;
        }
      return 0;
    }else{
      return 0
    }
  })
    updateStateOnSort(sortedArray)
  }

  const filterByMinRating = () =>{
    const sortedArray = products.sort((a,b)=>{
      if (a.rating !== null && b.rating !== null){
        if(parseInt(a.rating) < parseInt(b.rating)){
          return -1;
        }else if(parseInt(a.rating) > parseInt(b.rating)){
          return 1;
        }
      return 0;
    }else{
      return 0
    }
  })
    updateStateOnSort(sortedArray)
  }


  return (
    <div className="filter">
        <div className="filter-list">
            <div className="filter-brand">
                <button>Por Marcas</button>
            </div>
            <div className="filter-price_rating">
                <button onClick={filterByMinPrice}>Menor Preço<AiOutlineCaretDown/></button>
                <button onClick={filterByMaxPrice}>Maior Preço <AiOutlineCaretUp/></button>
                <button onClick={filterByMaxRating}>Maior Avaliação <AiFillStar/></button>
                <button onClick={filterByMinRating}>Menor Avaliação <AiOutlineStar/></button>
            </div>
        </div>
    </div>
  );
}
import React, { useState} from "react";
import './style.scss';
import { AiFillStar, AiOutlineStar, AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai";
import api from '../../Services/api';


export default function FilterList ({products, updateStateOnSort}){
  const [brand, setBrand] = useState();
  const [menuBrand, setMenuBrand] = useState(false);

  const MenuToogleBrand = () =>{
    setMenuBrand(!menuBrand)
  }

  const handleBrand = (e)=>{
    e.preventDefault();
    const inputBrand = e.target.value

    api.get(`/products.json?brand=${inputBrand}`)
    .then((response) =>  setBrand(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    filterByBrand(brand)
  } 

  const filterByBrand = (array)=>{
    const slicedBrand = array.slice(0,45)
    updateStateOnSort(slicedBrand)
  }

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
                <div className="brand-btn">
                  <button onClick={MenuToogleBrand} >Por Marcas</button>
                </div>
                <div className={menuBrand ? "modal" : "modalNone"}>
                  <div className="modal-brand">
                    <button onClick={handleBrand} value="benefit">Benefit</button>
                    <button onClick={handleBrand} value="clinique">Clinique</button>
                    <button onClick={handleBrand} value="covergirl">Covergirl</button>
                    <button onClick={handleBrand} value="dior">Dior</button>
                    <button onClick={handleBrand} value="l'oreal">L'oreal</button>
                    <button onClick={handleBrand} value="maybelline">Maybelline</button>
                    <button onClick={handleBrand} value="nyx">Nyx</button>
                    <button onClick={handleBrand} value="revlon">Revlon</button>
                  </div>
                </div>
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
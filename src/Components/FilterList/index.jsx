import React from "react";
import './style.css';
import { AiFillStar, AiOutlineStar, AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai";

export default function FilterList (){

  return (
    <div className="filter">
        <div className="filter-list">
            <div className="filter-brand">
                <button>Por Marcas</button>
            </div>
            <div className="filter-price_rating">
                <button>Menor Preço <AiOutlineCaretDown/></button>
                <button>Maior Preço <AiOutlineCaretUp/></button>
                <button>Maior Avaliação <AiFillStar/></button>
                <button>Menor Avaliação <AiOutlineStar/></button>
            </div>
        </div>
    </div>
  );
}
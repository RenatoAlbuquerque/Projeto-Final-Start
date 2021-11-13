import React, {useEffect, useState} from 'react';
import './styles.css'
export default function Items(props) {

    return (
       <div className="item-container">
           <img src={props.img} alt="Foto do produto" className="item-img" />
           <div className="item-content">
            <h1>{props.nome}</h1>
            <h2>{props.marca}</h2>
           </div>
           <div className="item-info">
           <h1 className="item-component">{props.preco}</h1>
           <h1 className="item-component">{props.quant}</h1>
           <h1 className="item-component">R$ {props.preco * props.quant}</h1>
           </div>

       </div> 
    );
}

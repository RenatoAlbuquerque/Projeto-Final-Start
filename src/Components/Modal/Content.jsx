import React, { useState } from 'react';

export default function Content(props){
    const [num, setNum] = useState(1);
    
    function sub(){
        if(num > 1){
            setNum(num - 1);
        }
    }
   
    return(
        <div className="content">
                <h3>{props.name}</h3>

                    <div className="container">
                        <div className="img-product">
                            <img src={props.img}alt="img"/>
                        </div>

                        <div className="item">
                           <ul className="details">
                                <li><b>Marca:</b> {props.marca}</li>
                                <li><b>Tipo:</b> {props.tipo}</li>
                                <li><b>Preço:</b> R$ {props.preco}</li>
                                <li><b>Cores:</b><span className="cor">{props.cor}</span></li>
                           </ul>
                           <div className="btns">
                                    <p className="text-quantidade">
                                        <b>Quant:</b>
                                    </p>
                                    <button className="btn-calculo" onClick={()=> setNum(num+1)}>+</button>
                                    <p className="quantCompras">{num}</p>
                                    <button className="btn-calculo" onClick={sub}>-</button>                                    
                            </div>
                            <button className="btn-comprar" type="button">Comprar</button>
                        </div>
                    </div>
                    <div className="description">
                        <p className="texto-desc">
                            <b>Descrição:</b> {props.desc.substr(0,300)}
                        </p>
                    </div>
        </div>
    );
}
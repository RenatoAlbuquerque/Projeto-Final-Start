import React from 'react';

export default function Content(props){

    console.log(props.avaliacao)
    return(
        <div className="content">
                <h3>{props.name}</h3>

                    <div className="container">
                        <div className="img-product">
                            <img src={props.img}alt="img"/>
                        </div>

                        <div>
                           <ul className="details">
                                <li><b>Marca:</b> {props.marca}</li>
                                <li><b>Preço:</b> R$ {props.preco}</li>
                                <li><b>Rating:</b>{props.avaliacao}</li>
                                <li></li>
                                <li><button className="btn-comprar" type="button">Comprar</button></li>
                           </ul>
                        </div>
                    </div>
                    <div className="description">
                        <p>
                            Descrição: {props.desc.substr(0,1000)}
                        </p>
                    </div>
        </div>
    );
}
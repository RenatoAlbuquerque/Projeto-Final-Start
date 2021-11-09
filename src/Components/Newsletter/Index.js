import React from "react";
import './style.css'

export default function Newsletter(){
    return(
        <div>
            <div className="conteinerA">
                <div className="texto">
                    <h3>OBTENHA ACESSO EXCLUSIVO E 10% DE DESCONTO</h3>
                    <p>quando você se inscreve em nossa Newsletter!</p>
                </div>
            </div>    

            <div className="areaTxt">
                <textarea  placeholder="Informe seu email"/>
                <button className="botao">Enviar</button>
            </div>
           

        </div>
    );
}
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

           <form className="form-newlestter">
               <input type="email" className="n_email" placeholder="Informe seu email"/>
               <button type="button" className="botao_new" onClick=""> Enviar </button>
           </form>
           <div className="paragrafotxt">
                <p>Ao inserir seu endereço de e-mail você receberá atualizações de promoções. O consentimento não é uma condição para a compra. Ver Política de Privacidade . Desconto de 10% válido apenas para novos clientes. Seu código será enviado via email.</p>
           </div> 

        </div>
    );
}
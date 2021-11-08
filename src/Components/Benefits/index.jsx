import React from 'react';
import './style.scss';
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { BiConversation } from "react-icons/bi";
import { RiLockPasswordFill, } from "react-icons/ri";


export default function Benefits() {
  return (
    <>
      <div className="vantagens-lista">
        <div className="vantagens">
          <div className="pagamento">
            <BsFillCreditCard2FrontFill />
            <div className="pag-descript">
              <h3>Parcelamento</h3>
              <p>Em até 12x</p>
            </div>
          </div>
          <div className="frete">
            <FaTruckMoving />
            <div className="fre-descript">
              <h3>Frete Gratis</h3>
              <p>Consulte as cidades</p>
            </div>
          </div>
          <div className="atendimento">
            <BiConversation />
            <div className="atd-descript">
              <h3>Fale Conosco</h3>
              <p>Diversos canais de comunicação</p>
            </div>
          </div>
          <div className="seguranca">
            <RiLockPasswordFill />
            <div className="seg-descript">
              <h3>Site Seguro</h3>
              <p>Compre protegido</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
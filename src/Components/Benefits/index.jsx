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
            <BsFillCreditCard2FrontFill id="benefitImg" />
            <div className="pag-descript">
              <h3 id="benefitType">Parcelamento</h3>
              <p id="benefitTypeComp">Em até 12x</p>
            </div>
          </div>
          <div className="frete">
            <FaTruckMoving id="benefitImg" />
            <div className="fre-descript">
              <h3 id="benefitType">Frete Gratis</h3>
              <p id="benefitTypeComp">Consulte as cidades</p>
            </div>
          </div>
          <div className="atendimento">
            <BiConversation id="benefitImg" />
            <div className="atd-descript">
              <h3 id="benefitType">Fale Conosco</h3>
              <p id="benefitTypeComp">Diversos canais de comunicação</p>
            </div>
          </div>
          <div className="seguranca">
            <RiLockPasswordFill id="benefitImg" />
            <div className="seg-descript">
              <h3 id="benefitType">Site Seguro</h3>
              <p id="benefitTypeComp">Compre protegido</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
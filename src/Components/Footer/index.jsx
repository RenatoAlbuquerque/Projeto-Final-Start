import React, { useState } from 'react';
import './style.scss';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import ModalEquipe from '../ModalEquipe/ModalEquipe';

export default function Footer() {
  const [showModal,setShowModal] = useState(false);
  return (
    <footer>
      <div className="rowInfoOne">
        <div className="marketplace">
          <p id="titleFir">
            Start Sua Beleza
          </p>
          <p id="markDescript">
            Se sinta ainda mais viva
          </p>
        </div>

        <div className="contact">
          <p className="titleSec">
            Contato
          </p>
          <div className="adress">
            <p>142 R. da Guia -  Recife, PE</p>
            <p>+55 81 91568-2306</p>
            <a
              id="adrEmail"
              href="mailto:startsuabeleza@gmail.com?Subject=Contato%20Start"
            >
              startsuabeleza@gmail.com
            </a>
          </div>
        </div>
        <div className="socialMedia">
          <p className="titleSec">
            Redes Sociais
          </p>
          <div className="iconsMedia">
            <a
              id="icon-social"
              href="https://www.facebook.com/redecidadaoficial"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFacebook />
            </a>
            <a
              id="icon-social"
              href="https://www.instagram.com/start_recife/?hl=pt-br"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              id="icon-social"
              href="https://www.instagram.com/start_recife/?hl=pt-br"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="projectDescript">
        <button id="btnProject">Sobre o Projeto</button>
        <p id="copyrigth">
          Todos os direitos reservados a Equipe de desenvolvedores. ®
        </p>
        <button id="btnProject"  onClick={() => { setShowModal(true) }}>Desenvolvedores</button>
      </div>
      {showModal ? 
          <ModalEquipe onClose={() => setShowModal(false)} />
        : null
      }
    </footer>
  );
}
import React from 'react';

import Cards from '../../Components/Cards/Cards';
import Valores from '../../Components/Valores/valores';
import App from '../../Components/Carrossel/Carrossel';
import Newsletter from '../../Components/Newsletter/Index';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

import './index.css'

export default function Home() {
  return (
    <div>
      
      <Navbar/>
      <App/>
      <Cards/>
      <Valores/>
      <Newsletter/>

      <div className="atendimento_feedback">

        <div>

          <img src="https://spinoff.com.br/entrete/wp-content/uploads/2021/09/Grazi-Massafera.jpg"></img>
          <p>"Atendimento incrível, super recomendo"</p>
          <p>Maria, Recife</p>

        </div>

        <div>

          <img src="https://spinoff.com.br/entrete/wp-content/uploads/2021/09/Grazi-Massafera.jpg"></img>
          <p>"Atendimento incrível, super recomendo"</p>
          <p>Maria, Recife</p>
          
        </div>

        <div>
          <img src="https://spinoff.com.br/entrete/wp-content/uploads/2021/09/Grazi-Massafera.jpg"></img>
          <p>"Atendimento incrível, super recomendo"</p>
          <p>Maria, Recife</p>
        </div>

      </div>
      
    </div>
  );
}

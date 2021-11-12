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

        <div className="card_opiniao">

          <img src="https://spinoff.com.br/entrete/wp-content/uploads/2021/09/Grazi-Massafera.jpg"></img>
          <p>"Atendimento incrível, super recomendo"</p>
          <p>Maria, Recife</p> 

        </div>

        <div className="card_opiniao">

          <img src="https://s2.glbimg.com/bh5jsmVOnUH9ew-HmZPv1y062Dw=/e.glbimg.com/og/ed/f/original/2020/01/10/flaviaalessandra-helena.jpg"></img>
          <p>"Melhor qualidade, super recomendo"</p>
          <p>Júlia, Olinda</p>
          
        </div>

        <div className="card_opiniao">
          <img src="https://pbs.twimg.com/profile_images/1410974431166468101/3vATVvl7_400x400.jpg"></img>
          <p> <span> " </span> Muito rápido, super recomendo"</p>
          <p>Flávia, Caruaru</p>
        </div>

      </div>

      <Footer/>
      
    </div>
  );
}

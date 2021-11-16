import React from 'react';
import Cards from '../../Components/Cards/Cards';
import Valores from '../../Components/Valores/valores';
import App from '../../Components/Carrossel/Carrossel';
import Newsletter from '../../Components/Newsletter/Index';
import Footer from '../../Components/Footer';
import Benefits from '../../Components/Benefits';
import Header from '../../Components/Header/index';
import './index.css';

import lais from '../../Images/Banner/lais.jpeg'
import may from '../../Images/Banner/may.jpeg'
import lais2 from '../../Images/Banner/lais2.jpeg'

export default function Home() {
  return (
    <div>
      <Header />
      <App />
      <Cards />
      <Valores />
      <Benefits />
      <Newsletter />

      <section className="atendimento_feedback">

        <div className="card_opiniao">

          <img src={lais} alt="model1"></img>
          <p>"Atendimento incrível, foram super anteciosos comigo. Enviaram meus produtos com muita delicadeza. Melhor qualidade que já vi. Super recomendo a todxssss."</p>
          <p className="nome_feed"> - Laís Eduarda, Recife</p>

        </div>

        <div className="card_opiniao">

          <img src={may} alt="model2"></img>
          <p>"Simplesmente um dos melhores produtos que já usei. Preço super em conta e atendimento incrível, já recomendei para todas amigas."</p>
          <p className="nome_feed"> -Júlia Oliveira, Fortaleza</p>

        </div>

        <div className="card_opiniao">
          <img src={lais2} alt="model3"></img>
          <p>"Fui atendida super bem. Achei incrível o cuidado que a marca tem com todos os clientes. Qualidade impecável, irei comprar mais vezes"</p>
          <p className="nome_feed"> - Flávia, São Paulo</p>
        </div>

      </section>

      <Footer />

    </div>
  );
}

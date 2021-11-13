import React from 'react';

import Cards from '../../Components/Cards/Cards';
import Valores from '../../Components/Valores/valores';
import App from '../../Components/Carrossel/Carrossel';
import Newsletter from '../../Components/Newsletter/Index';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Benefits from '../../Components/Benefits';

import './index.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <App />
      <Cards />
      <Valores />
      <Benefits />
      <Newsletter />

      <section className="atendimento_feedback">

        <div className="card_opiniao">

          <img src="https://spinoff.com.br/entrete/wp-content/uploads/2021/09/Grazi-Massafera.jpg"></img>
          <p>"Atendimento incrível, foram super anteciosos comigo. Enviaram meus produtos com muita delicadeza. Melhor qualidade que já vi. Super recomendo a todxssss."</p>
          <p className="nome_feed"> - Maria Júlia, Recife</p>

        </div>

        <div className="card_opiniao">

          <img src="https://s2.glbimg.com/bh5jsmVOnUH9ew-HmZPv1y062Dw=/e.glbimg.com/og/ed/f/original/2020/01/10/flaviaalessandra-helena.jpg"></img>
          <p>"Simplesmente um dos melhores produtos que já usei. Preço super em conta e atendimento incrível, já recomendei para todas amigas."</p>
          <p className="nome_feed"> -Júlia Oliveira, Fortaleza</p>

        </div>

        <div className="card_opiniao">
          <img src="https://pbs.twimg.com/profile_images/1410974431166468101/3vATVvl7_400x400.jpg"></img>
          <p>"Fui atendida super bem. Achei incrível o cuidado que a marca tem com todos os clientes. Qualidade impecável, irei comprar mais vezes"</p>
          <p className="nome_feed"> - Flávia, São Paulo</p>
        </div>

      </section>

      <Footer />

    </div>
  );
}

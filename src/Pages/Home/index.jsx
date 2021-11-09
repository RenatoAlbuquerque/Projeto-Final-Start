import React from 'react';
import Header from '../../Components/Header';
import Cards from '../../Components/Cards/Cards';
import Valores from '../../Components/Valores/valores';
import App from '../../Components/Carrossel/Carrossel';
import Footer from '../../Components/Footer';

import './index.css'

export default function Home() {
  return (
    <div>
      <Header />
      <App />
      <Cards />
      <div className="publi">
        <h1>Start sua beleza, trazendo mais vida para seu dia a dia</h1>
      </div>
      <Valores />
      <Footer />
    </div>
  );
}

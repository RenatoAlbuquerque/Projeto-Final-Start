import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Carrossel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

export default function App() {

  const [items] = useState([
    <img src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive/loucas/wordpress/prod/sites/1/2021/08/05140426/Banner-dicas-para-arrasar-com-blush-iluminador.jpg" height="100%" width="100%"></img> , 
    <img src="https://s3-sa-east-1.amazonaws.com/object.belezanaweb.com.br/loucas/wordpress/prod/sites/1/2020/12/04123528/banner-como-montar-um-kit-maquiagem-para-iniciantes.png" width="100%" height="100%"></img> ,
    <img src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive/v1598278184/loucas-por-beleza/3%20op%C3%A7%C3%B5es%20de%20maquiagem%20para%20olhos/banner-3-op%C3%A7%C3%B5es-de-maquiagem-para-olhos.png"></img>]);

  return (
    <div className="App">

      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}> {item} </Item>
          ))}
        </Carousel>
      </div>

    </div>
  );
}
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Carrossel.css";
import Banner1 from '../../Images/Banner/Banners01.jpg'
import Banner2 from '../../Images/Banner/Banners02.jpg'
import Banner3 from '../../Images/Banner/Banners03.jpg' 

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

export default function App() {

  const [items] = useState([
    <img src={Banner1} alt="Promoção Black Friday"></img> , 
    <img src= {Banner2} alt="Promoção Black Friday"></img> ,
    <img src={Banner3} alt="Cupom de desconto"></img>
  ]);

  return (
    <div className="App">

      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2500} infinite>
          {items.map((item) => (
            <Item key={item}> {item} </Item>
          ))}
        </Carousel>
      </div>

    </div>
  );
}
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
    <img src="" height="100%" width="100%"></img> , 
    <img src="" width="100%" height="100%"></img> ,
    <img src="" width="100%" height="100%"></img>
  ]);

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
import "./style.scss";
import batomIcon from "../../Images/IconsProductTypes/batom.png";
import blushIcon from "../../Images/IconsProductTypes/blush.png";
import bronzerIcon from "../../Images/IconsProductTypes/bronzer.png";
import esmalteIcon from "../../Images/IconsProductTypes/esmalte.png";
import delineadorIcon from "../../Images/IconsProductTypes/delineador.png";
import rimelIcon from "../../Images/IconsProductTypes/rimel.png";
import React, { useContext } from "react";
import { ProductsContext } from '../providers/products';
import api from "../../Services/api";

export default function ProductTypes() {
  const products = useContext(ProductsContext);

  const sliceType = (array) => {
    const sliced = array.slice(0, 45)
    products.setProducts(sliced)
  }

  const getProductByType = async (type) => {
    try {
      const { data } = await api.get(`/products.json?product_type=${type}`)
      sliceType(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="lineGradientUP"></div>
      <div className="product">
        <div className="types">
          <div className="lipstick">
            <button onClick={() => getProductByType("lipstick")}>
              <img src={batomIcon} alt="batom-icon" />
              <span>Batom</span>
            </button>
          </div>
          <div className="blush" >
            <button onClick={() => getProductByType("blush")}>
              <img src={blushIcon} alt="blush-icon" />
              <span>Blush</span>
            </button>
          </div>
          <div className="bronzer" >
            <button onClick={() => getProductByType("bronzer")}>
              <img src={bronzerIcon} alt="bronzer-icon" />
              <span>Bronzer</span>
            </button>
          </div>
          <div className="nail-polish">
            <button onClick={() => getProductByType("nail_polish")}>
              <img src={esmalteIcon} alt="esmalte-icon" />
              <span>Esmalte</span>
            </button>
          </div>
          <div className="eyebrow" >
            <button onClick={() => getProductByType("eyebrow")}>
              <img src={delineadorIcon} alt="delineador-icon" />
              <span>Delineador</span>
            </button>
          </div>
          <div className="mascara">
            <button onClick={() => getProductByType("mascara")}>
              <img src={rimelIcon} alt="rimel-icon" />
              <span>Rímel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

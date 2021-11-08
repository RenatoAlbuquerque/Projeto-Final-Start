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
          <button id="btnType" onClick={() => getProductByType("lipstick")}>
            <div className="lipstick">
              <img src={batomIcon} alt="batom-icon" />
              <span>Batom</span>
            </div>
          </button>
          <button id="btnType" onClick={() => getProductByType("blush")}>
            <div className="blush" >
              <img src={blushIcon} alt="blush-icon" />
              <span>Blush</span>
            </div>
          </button>
          <button id="btnType" onClick={() => getProductByType("bronzer")}>
            <div className="bronzer" >
              <img src={bronzerIcon} alt="bronzer-icon" />
              <span>Bronzer</span>
            </div>
          </button>
          <button id="btnType" onClick={() => getProductByType("eyebrow")}>
            <div className="eyebrow" >
              <img src={delineadorIcon} alt="delineador-icon" />
              <span>Delineador</span>
            </div>
          </button>
          <button id="btnType" onClick={() => getProductByType("nail_polish")}>
            <div className="nail-polish">
              <img src={esmalteIcon} alt="esmalte-icon" />
              <span>Esmalte</span>
            </div>
          </button>
          <button id="btnType" onClick={() => getProductByType("mascara")}>
            <div className="mascara">
              <img src={rimelIcon} alt="rimel-icon" />
              <span>Rímel</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

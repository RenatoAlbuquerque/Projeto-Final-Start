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
          <button
            id="btnType"
            onClick={() =>
              getProductByType("lipstick")}
          >
            <div className="lipstick">
              <img
                id="imgTypes"
                src={batomIcon}
                alt="batom-icon"
              />
              <span id="prodType">Batom</span>
            </div>
          </button>
          <button
            id="btnType"
            onClick={() =>
              getProductByType("blush")}
          >
            <div className="blush" >
              <img
                id="imgTypes"
                src={blushIcon}
                alt="blush-icon"
              />
              <span id="prodType">Blush</span>
            </div>
          </button>
          <button
            id="btnType"
            onClick={() =>
              getProductByType("bronzer")}
          >
            <div className="bronzer" >
              <img
                id="imgTypes"
                src={bronzerIcon}
                alt="bronzer-icon"
              />
              <span id="prodType">Bronzer</span>
            </div>
          </button>
          <button
            id="btnType"
            onClick={() =>
              getProductByType("eyebrow")}
          >
            <div className="eyebrow" >
              <img
                id="imgTypes"
                src={delineadorIcon}
                alt="delineador-icon"
              />
              <span id="prodType">Delineador</span>
            </div>
          </button>
          <button
            id="btnType"
            onClick={() =>
              getProductByType("nail_polish")}
          >
            <div className="nail-polish">
              <img
                id="imgTypes"
                src={esmalteIcon}
                alt="esmalte-icon"
              />
              <span id="prodType">Esmalte</span>
            </div>
          </button>
          <button
            id="btnType"
            onClick={() =>
              getProductByType("mascara")}>
            <div className="mascara">
              <img
                id="imgTypes"
                src={rimelIcon}
                alt="rimel-icon"
              />
              <span id="prodType">Rímel</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

import React from "react";
import './Cards.css'
import { Link } from "react-router-dom";

export default function Cards(){

    return(
        <div>
            
            <div className="cards-conteiner">

                <div id="card">
                    <div class="imgBx">
                        <Link to='/produto'><img src="http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/530/original/open-uri20171223-4-5v7061?1514062152" alt="Produto"/></Link>   
                    </div>
                    <div class="contentBx"> 
                        <h3>Double Exposure Palette</h3>
                        <h2 class="price">R$50.<small>99</small> </h2>
                        <p class="descricao">Pros in our L.A. photo studio created this transformative palette to multiply their eye.</p>
                    </div>        
                </div>


                <div id="card">
                    <div class="imgBx">
                        <Link to='/produto'> <img src="http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/532/original/data?1514062152" alt="Produto"/></Link>   
                    </div>
                    <div class="contentBx"> 
                        <h3>Always Sharp 3D Liner</h3>
                        <h2 class="price">R$20.<small>00</small> </h2>
                        <p class="descricao">On a photo shoot, the crew can’t wait around while makeup artists sharpen their pencils. </p>
                    </div>  
                </div>

                <div id="card"> 
                    <div class="imgBx">
                        <Link to='/produto'> <img src="http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/527/original/open-uri20171223-4-aqs6ml?1514062151" alt="Produto"/></Link>
                    </div>
                    <div class="contentBx"> 
                        <h3>Full Exposure Palette</h3>
                        <h2 class="price">R$52.<small>00</small> </h2>
                        <p class="descricao">Pros in our L.A. studio use neutral eye shadows constantly, and they LOVE</p>
                    </div>  
                
                </div>

            </div>
        </div>
    )
}
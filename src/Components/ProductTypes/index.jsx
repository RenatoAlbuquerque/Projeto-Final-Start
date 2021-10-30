import './style.scss';
import batomIcon from '../../Images/IconsProductTypes/batom.png';
import blushIcon from '../../Images/IconsProductTypes/blush.png';
import bronzerIcon from '../../Images/IconsProductTypes/bronzer.png';
import esmalteIcon from '../../Images/IconsProductTypes/esmalte.png';
import delineadorIcon from '../../Images/IconsProductTypes/delineador.png';
import rimelIcon from '../../Images/IconsProductTypes/rimel.png';

export default function ProductTypes(){

    return(
        <>
            <div className="lineGradientUP"></div>
            <div className="product"> 
                <div className="types">
                    <div className="lipstick">
                        <img src={batomIcon} alt="batom-icon"/>
                        <button>Batom</button>
                    </div>
                    <div className="blush">
                        <img src={blushIcon} alt="blush-icon"/>
                        <button>Blush</button>
                    </div>
                    <div className="bronzer">
                        <img src={bronzerIcon} alt="bronzer-icon"/>
                        <button>Bronzer</button>
                    </div>
                    <div className="nail-polish">
                        <img src={esmalteIcon} alt="esmalte-icon"/>
                        <button>Esmalte</button>
                    </div>
                    <div className="eyebrow">
                        <img src={delineadorIcon} alt="delineador-icon"/>
                        <button>Delineador</button>
                    </div>
                    <div className="mascara">
                        <img src={rimelIcon} alt="rimel-icon"/>
                        <button>Rímel</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
import React from "react";
import './style.scss';
import gilberto from "../../Images/ImageProfile/gilberto.jpeg";
import julia from "../../Images/ImageProfile/julia.jpeg";
import mayane from "../../Images/ImageProfile/mayane.jpeg";
import renato from "../../Images/ImageProfile/renato.jpeg";
import ruggery from "../../Images/ImageProfile/ruggery.jpeg";
import wilhams from "../../Images/ImageProfile/wilhams.jpg";



export default function ModalEquipe({ id = 'modal-equipe-overlay', onClose = () => { } }) {

    const outSideClick = (e => {
        if (e.target.id === id) onClose();
    })
    return (
        <div id="modal-equipe-overlay" onClick={outSideClick}>
            <div className="modal-equipe">
                    <button className="btn-close" type="button" onClick={onClose}>X</button>
                    <h1 id="titulo-modal"> Desenvolvedores
                        <i class="fas fa-laptop-code"></i>
                    </h1>
                <div id="container">
                    <div id="item-container">
                        <h4 id="title-card">Gilberto Medeiros</h4>
                        <div class="img-profile">
                            <img src={gilberto} alt="img-gilberto" />
                        </div>
                        <div class="icons">
                            <a href="https://linkedin.com/in/gilbertomoj/" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/gilbertomoj/" target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div id="item-container">
                        <h4 id="title-card">Julia Silva</h4>
                        <div class="img-profile">
                            <img src={julia} alt="img-julia" />
                        </div>
                        <div class="icons">
                            <a href="https://linkedin.com/in/julia-eduarda/" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/Julia-Edu/" target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div id="item-container">
                        <h4 id="title-card">Mayane Miranda</h4>
                        <div class="img-profile">
                            <img src={mayane} alt="img-mayane" />
                        </div>
                        <div class="icons">
                            <a href="https://linkedin.com/in/mayane-miranda-859771209/" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/mayanemirandaa/" target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div id="item-container">
                        <h4 id="title-card">Renato Abreu</h4>
                        <div class="img-profile">
                            <img src={renato} alt="img-renato" />
                        </div>
                        <div class="icons">
                            <a href="https://linkedin.com/in/renato-albuquerque-dev/" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/RenatoAlbuquerque/" target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div id="item-container">
                        <h4 id="title-card">Ruggery Gusm??o</h4>
                        <div class="img-profile">
                            <img src={ruggery} alt="img-ruggery" />
                        </div>
                        <div class="icons">
                            <a href="https://linkedin.com/in/ruggerygusmao/" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/ruggerygusmao/" target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div id="item-container">
                        <h4 id="title-card">Wilhams Silva</h4>
                        <div class="img-profile">
                            <img src={wilhams} alt="img-wilhams" />
                        </div>
                        <div class="icons">
                            <a href="https://linkedin.com/in/wilhamsgomes/" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/WilhamsGomes/" target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


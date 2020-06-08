import React from 'react'

//style
import './designs.style.scss';


const Designs = () => (
    <div className="designs-container">
        <h3>Designs</h3>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <span>#green #grey #music</span>
                    <div id="my-frequency"></div>
                </div>
                <div class="carousel-item">
                    <span>#blue #white #bathroom</span>
                    <div id="bubble-design"></div>
                </div>
                <div class="carousel-item">
                    <span>#blue #grey #creatify</span>
                    <div id="creatify-design"></div>
                </div>
                <div class="carousel-item">
                    <span>#grey #white #cv</span>
                    <div id="cv-design"></div>
                </div>
                <div class="carousel-item">
                    <span>#blue #white #docs</span>
                    <div id="docvis-design"></div>
                </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
    </div>
)

export default Designs;
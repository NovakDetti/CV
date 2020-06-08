import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './intro.style.scss';


export const LeftIntro = ({title,year,comment,img}) => {
    AOS.init();

    return(
    <div className="col-lg-12">
        <div id="intro">
            <div id="picture" style={{ backgroundImage: img }}></div>
            <div id="informations" className="left-aligned text-style">
                    <div className="inside-border" data-aos="fade-down">
                    <h6>{year}</h6>
                    <h5>{title}</h5>
                    <p>{comment}</p>
                </div> 
            </div>
        </div>
    </div>
    )
}
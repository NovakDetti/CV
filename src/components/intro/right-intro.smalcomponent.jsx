import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './intro.style.scss';

export const RightIntro = ({title,year,comment,img}) => {
    AOS.init()

    return(
    <div className="col-lg-12">
        <div id="intro" >
                <div id="informations" className="right-aligned text-style">
                    <div className="inside-border" data-aos="fade-down">
                            <p>{year}</p>
                            <h5>{title}</h5>
                            <p>{comment}</p>
                        </div>
                    </div> 
                    <div id="picture" style={{ backgroundImage : img}}>
            </div>
        </div>
    </div>)
}
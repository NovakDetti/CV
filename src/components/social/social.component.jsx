import React from 'react';

import './social.style.scss';



export const Social = () => (
    <div id="social-container">
    <div className="container">
        <div className="row">
            <div className="col-4 d-flex justify-content-center">
                <a href="https://github.com/NovakDetti"><div id="github" className="social-icon"></div></a>
            </div>
                <div className="col-4 d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/bernadett-novák-12a27316a/"><div id="linkedin" className="social-icon"></div></a>   
            </div>
                <div className="col-4 d-flex justify-content-center">
                    <a href="mailto:csakegydetti94@gmail.com"><div id="mail" className="social-icon"></div></a>   
            </div>
        </div>
    </div>
    </div>
);
import React from 'react';

import './intro.style.scss';
import { LeftIntro } from './left-intro.smallcomponent';
import {RightIntro} from './right-intro.smalcomponent'

export const Intro = ({title, year, comment, img, align}) => (
    <div> 
        <div className="vl"></div>
    {align === "left" ? <LeftIntro title={title} year={year} comment={comment} img={img}/> : <RightIntro title={title} year={year} comment={comment} img={img}/>}
    </div>
);


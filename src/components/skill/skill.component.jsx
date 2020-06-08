import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

//style
import './skill.style.scss';

const Skill = ({skill, level}) => {
    AOS.init();
    const dots = []
    for (let index = 0; index <= level ; ++index) {
        dots.push(<div key={index} className="dot level" data-aos="fade-right"></div>)   
    }

    return (
        <div className="skill">
            <h5>{skill}</h5>
            {dots}
        </div>
    )
}

export default Skill;
import React, { Component } from 'react';
import AOS from 'aos';

import './homepage.style.scss';

import {Intro} from '../../components/intro/intro.component';
import {Skills} from '../../components/skills/skills.component';
import {Social} from '../../components/social/social.component';
import {Footer} from '../../components/footer/footer.component';
import Designs from '../../components/designs/designs.component';

import elte from '../../materials/elte.jpeg';
import work from '../../materials/work.jpeg';
import degree from '../../materials/degree.jpg';
import mac from '../../materials/macbook.JPG';

AOS.init();

class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            message_bubble : "Hello I'm Bernadett",
            about_infos : [
                {
                    id: 1,
                    year: '2020 - ',
                    title: "Oracle",
                    comment: "Javascript intern",
                    img: `url(${mac})`,
                    align: 'right'
                },
                {
                    id : 1,
                    year : '2018 - 2020',
                    title : "Neticle",
                    comment : "Data Collector",
                    img : `url(${work})`,
                    align : 'left'
                },
                {
                    id : 2,
                    year : '2016 - 2020',
                    title : "ELTE Computer Science BA",
                    comment : "Final semester",
                    img : `url(${elte})`,
                    align : 'right'
                },
                {
                    id : 3,
                    year : '2013 - 2016',
                    title : "Apor Vilmos Catholic College Kindergarten teacher BA",
                    comment : "",
                    img : `url(${degree})`,
                    align : 'left'
                }
            ]
        }
        this.light = React.createRef();
    }

    moveDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    render(){
        let stars = []
        for (let index = 0; index <= 20; ++index) {
            stars.push(<div key={index} className="random-light" style={{ top: Math.floor((Math.random() * 600) + 1), right: Math.floor((Math.random() * window.innerWidth) + 1), zIndex: 0}}></div>)
        }
        return(
        <div className="main-container">
            <div id="universe"></div>
            <h4>Novák Bernadett</h4>
            <div id="me"></div>
            {stars}
            <div id="letterhead-container" >
                <p id="first">It all started with my birth.</p>
                <p id="second">The sky was cloudy.</p>
                <p id="third">There was confusion in the force.</p>
                <p id="fourth">Okay...okay..</p>
                <p id="fifth">We turn to the point</p>
                <p id="sixth">I am a</p>
                <h3>DEVELOPER.</h3>
                <div id="down-arrow" onClick={this.moveDown}></div>
            </div>
                <div id="body"></div>
                <h3 id="timeline">Timeline</h3>
                <div>
                    {
                        this.state.about_infos.map(({ title, year, comment, id, img, align }) => <Intro key={Math.random()} title={title} year={year} comment={comment} img={img} align={align} />)
                    }
                </div>
                <Skills />
                <Designs/>
                <Social />
                <Footer />
            </div>
        )
    }

}

export default Homepage;
import React from 'react';

//style
import './skills.style.scss';

//components
import Skill from '../skill/skill.component';

//datas
import skillDatas from "../../datas/data.json";

export const Skills = () => (
    <div id="skill-table">
        <h3>Skills</h3>
        <div className="skill-container">
            {skillDatas.skills.map(skill => <Skill skill={skill.name} level={skill.level}/>)}
        </div>
    </div>
);
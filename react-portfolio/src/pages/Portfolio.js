import React from 'react';
import Project from '../components/Project';
import PetStar from '../assets/PetStar.jpg';
import AutoMD from '../assets/AutoMD.jpg';
import Express from '../assets/Express.jpg';
import Editor from '../assets/editor.jpg';


import '../styles/Portfolio.css';



function Portfolio(){
    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <div className='projectList'>
            <Project name="PetStar FullStack App" image={PetStar} />
            <Project name="AutoMD FrontEnd App" image={AutoMD}/>
            <Project name="Note Taker ExpressJS" image={Express}/>
            <Project name="AutoMD FrontEnd App" image={AutoMD}/>
            <Project name="AutoMD FrontEnd App" image={AutoMD}/>
            <Project name="Text Editor PWA" image={Editor}/>
            </div>

        </div>
    )
}

export default Portfolio
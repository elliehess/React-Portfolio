import React from 'react';
import Project from '../components/Project';
import PetStar from '../assets/PetStar.jpg';
import AutoMD from '../assets/AutoMD.jpg';
import '../styles/Portfolio.css';



function Portfolio(){
    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <div className='projectList'></div>
            <Project name="PetStar FullStack App" image={PetStar} />
            <Project name="AutoMD FrontEnd App" image={AutoMD}/>
            <Project name="AutoMD FrontEnd App" image={AutoMD}/>
            <Project name="AutoMD FrontEnd App" image={AutoMD}/>
            <Project name="AutoMD FrontEnd App" image={AutoMD}/>
            <Project name="AutoMD FrontEnd App" image={AutoMD}/>

        </div>
    )
}

export default Portfolio
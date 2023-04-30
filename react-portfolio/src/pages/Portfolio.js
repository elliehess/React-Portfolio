import React from 'react';
import Project from '../components/Project';
import PetStar from '../assets/PetStar.jpg';
import AutoMD from '../assets/AutoMD.jpg';
import Express from '../assets/Express.jpg';
import Editor from '../assets/editor.jpg';
import Social from '../assets/social.jpg'
import Ecommerce from '../assets/ecommerce.jpg'


import '../styles/Portfolio.css';



function Portfolio(){
    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <div className='projectList'>
            <Project name="PetStar FullStack App" image={PetStar} githubUrl='https://github.com/elliehess/PetStar'/>
            <Project name="AutoMD FrontEnd App" image={AutoMD} githubUrl='https://github.com/elliehess/project-1-automd'/>
            <Project name="Note Taker ExpressJS" image={Express} githubUrl='https://github.com/elliehess/module-11-note-taker'/>
            <Project name="MongoSocial NoSQL" image={Social} githubUrl='https://github.com/elliehess/module-18-NoSQL-MongoSocial'/>
            <Project name="E-Commerce BackEnd/MySQL" image={Ecommerce} githubUrl='https://github.com/elliehess/module-13-ECommerce-ORM'/>
            <Project name="Text Editor PWA" image={Editor} githubUrl='https://github.com/elliehess/module-19-text-editor-PWA'/>
            </div>

        </div>
    )
}

export default Portfolio
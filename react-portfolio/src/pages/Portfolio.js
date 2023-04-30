import React from 'react';
import Project from '../components/Project';
import PetStar from '../assets/PetStar.jpg';
import AutoMD from '../assets/AutoMD.jpg';
import Express from '../assets/Express.jpg';
import Editor from '../assets/editor.jpg';
import Social from '../assets/social.jpg'
import Ecommerce from '../assets/ecommerce.jpg';
import '../styles/Portfolio.css';



function Portfolio(){
    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <div className='projectList'>
            <Project name="PetStar FullStack App" image={PetStar} githubUrl='https://github.com/elliehess/PetStar' websiteUrl='https://murmuring-garden-13240.herokuapp.com/'/>
            <Project name="AutoMD FrontEnd App" image={AutoMD} githubUrl='https://github.com/elliehess/project-1-automd'websiteUrl='https://elliehess.github.io/project-1-automd/'/>
            <Project name="Note Taker ExpressJS" image={Express} githubUrl='https://github.com/elliehess/module-11-note-taker'websiteUrl='https://ancient-tor-12985.herokuapp.com/'/>
            <Project name="MongoSocial NoSQL" image={Social} githubUrl='https://github.com/elliehess/module-18-NoSQL-MongoSocial'websiteUrl='https://user-images.githubusercontent.com/118075347/231066665-a291b9df-8b4f-4b4d-9215-554fd32b0cdf.mp4'/>
            <Project name="E-Commerce MySQL" image={Ecommerce} githubUrl='https://github.com/elliehess/module-13-ECommerce-ORM'websiteUrl='https://user-images.githubusercontent.com/118075347/223225148-6366cdc5-3834-4519-b4b0-710bff0c844c.mp4'/>
            <Project name="Text Editor PWA" image={Editor} githubUrl='https://github.com/elliehess/module-19-text-editor-PWA'websiteUrl=''/>
            </div>

        </div>
    )
}

export default Portfolio
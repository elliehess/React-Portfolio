import React from 'react';

import '../styles/AboutMe.css';

function AboutMe(){
    return (
        <div className='home'>
            <div className='main'>
                <h2>Hi, my name is Ellie</h2>
                <div className='prompt'><p> A recent graduate from Michigan State University's Coding Bootcamp, I am ready to code!{'\n'}
                Check out some of my recent projects in my Portfolio page as well as some of my Skills down below.

                </p>

                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS, HTML, CSS, Bootstrap</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>MySql, NodeJS, ExpressJS, GraphQL, ApolloServer
                            MondoDB 
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>Javascript</span>
                    </li>
                </ol>
            </div>

        </div>
    )
}

export default AboutMe
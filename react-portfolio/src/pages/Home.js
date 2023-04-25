import React from 'react';
import '../styles/Home.css';

function Home(){
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, my name is Ellie</h2>
                <div className='prompt'><p> A new Bootcamp Grad looking to code!</p>

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

export default Home
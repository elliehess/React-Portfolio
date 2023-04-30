import React from 'react';
import {FaGithub} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Project({image, name}){
    const navigate = useNavigate();
    return (
        <div className='projectItem' onClick= {() => {
            navigate()
        }}>
            <div style={{backgroundImage: `url(${image})` }} className='bgImage'/>
            <h1> {name} </h1>
        </div>
    )
}

export default Project
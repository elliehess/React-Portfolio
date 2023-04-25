import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar(){
    return (
        <div className='navbar'>
            <div className='toggleButton'>
                <button></button>
            </div>
            <div className='links'>
                <Link to ='/'>Home </Link>
                <Link to ='/aboutme'>About Me </Link>
                <Link to ='/portfolio'>Portfolio </Link>
                <Link to ='/contact'>Contact </Link>
                <Link to ='/resume'>Resume</Link>
            </div>
        </div>
    )
}

export default Navbar;
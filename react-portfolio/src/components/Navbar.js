import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/Navbar.css';
import {FaAlignJustify} from 'react-icons/fa';
function Navbar(){
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    //whenever the location changes, set the expandnavbar to false so it collapses and you can see the new rendered page
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className='navbar' id={expandNavbar ? 'open': 'close'}>
            <div className='toggleButton'>
                <button onClick={()=> {setExpandNavbar((prev) => !prev)}}><FaAlignJustify/></button>
            </div>
            <div className='links'>
                <Link to ='/'>About Me </Link>
                 <Link to ='/portfolio'>Portfolio </Link>
                <Link to ='/contact'>Contact </Link>
                <Link to ='/resume'>Resume</Link>
            </div>
        </div>
    )
}

export default Navbar;
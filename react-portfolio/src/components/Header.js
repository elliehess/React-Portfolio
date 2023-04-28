import React from 'react';
import Avatar from '../assets/avatar.jpg'


import '../styles/Header.css'
function Header(){
    return (
        <header className='header'>
            <div className='headertitle'>Ellie Hess</div>
            <div className='avatar'><img src={Avatar} alt="woman" 
            style={{ width: 185, height: 225, borderRadius: '110px'}}/>
            </div>
        </header>
    )
}

export default Header;
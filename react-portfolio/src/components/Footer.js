import React from 'react';
// import LinkedInIcon from '@material-ui/icons';
// import InstagramIcon from '@material-ui/icons';
import '../styles/Footer.css';

function Footer(){
    return (
        <div className='footer'>
            <div className='socialMedia'>
                {/* <InstragramIcon />
                <LinkedInIcon /> */}
            </div>
            <p> &copy; 2023 github.com/elliehess</p>
        </div>
    );
}

export default Footer;
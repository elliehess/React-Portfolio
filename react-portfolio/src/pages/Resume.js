import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <div className='home'>
      <div className='resume'><h2>Resume</h2></div>
      <div className='skills_resume'> 
        <button className="download-button">
          <a href='https://profile.indeed.com/p/ellieh-ytsxlwu' target='blank'><h1>Download Resume </h1></a>
          <span className="tooltip">Click here to download resume</span>
        </button>
      </div>
    </div>
  );
}

export default Resume;

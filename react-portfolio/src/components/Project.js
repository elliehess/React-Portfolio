import React from 'react';
import { FaGithub, FaAppStore } from 'react-icons/fa';

function Project({ image, name, githubUrl, websiteUrl }) {
  const openGithub = () => {
    window.open(githubUrl, '_blank');
  };

  return (
    <div className="projectItem" onClick={openGithub}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <div className='appIcon'>
        <a href={websiteUrl} target='blank'>
          <FaAppStore size={32} />
        </a>
      </div>
      <div className="githubIcon">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
      </div>
    </div>
  );
}

export default Project;



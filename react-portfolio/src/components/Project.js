import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

//Use window.open instead of useNavigate to open a new window with the github repo while the React portfolio is still running in the background
function Project({ image, name, githubUrl }) {
  const openGithub = () => {
    window.open(githubUrl, '_blank');};
  const [showGithub, setShowGithub] = useState(false);

  //if mouse hovers over project item, show the github icon
  return (
    <div
      className="projectItem"
      onMouseEnter={() => setShowGithub(true)}
      onMouseLeave={() => setShowGithub(false)}
      onClick={openGithub}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      {showGithub && (
        <a href={githubUrl}target="_blank" rel="noopener noreferrer" className="githubIcon">
          <FaGithub size={32} />
        </a>
      )}
    </div>
  );
}

export default Project;

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Project({ image, name, url }) {
  const navigate = useNavigate();
  const [showGithub, setShowGithub] = useState(false);

  return (
    <div
      className="projectItem"
      onMouseEnter={() => setShowGithub(true)}
      onMouseLeave={() => setShowGithub(false)}
      onClick={() => navigate(url)}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      {showGithub && (
        <a href={url}  className="githubIcon">
          <FaGithub size={32} />
        </a>
      )}
    </div>
  );
}

export default Project;

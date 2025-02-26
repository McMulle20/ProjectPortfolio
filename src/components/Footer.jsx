import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // import icons
import '../index.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a
          href="https://github.com/McMulle20"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/meghan-mcmullen-237940346/"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/mmcmulle20"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

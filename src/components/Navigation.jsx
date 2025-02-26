import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="nav-link" activeClassName="active">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

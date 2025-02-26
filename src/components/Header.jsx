import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <h1 className="header-title">MCMULLEN</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;

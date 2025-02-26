import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>John Doe</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

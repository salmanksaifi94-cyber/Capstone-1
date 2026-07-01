import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1>✨ LUMINA</h1>
          <p>Neon Luxury • Gen Z Vibes • Ultra Stays</p>
        </div>
        <nav className="nav-links">
          <a href="#rooms">Rooms</a>
          <a href="#services">Services</a>
          <a href="#booking">Book Now</a>
          <a href="#dashboard">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

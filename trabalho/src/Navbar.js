import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">React Nutri</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}
gi
// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-wrap">
      <div className="nav-inner nav-inner--menu-only">
        <div className="nav-links">
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <Link to="/#skills">Skills</Link>
          <a 
            className="nav-contact" 
            href="https://wa.me/6289639468593" 
            target="_blank" 
            rel="noreferrer"
          >
            Let's talk <span>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
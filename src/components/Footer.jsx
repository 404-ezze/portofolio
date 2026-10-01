import React from 'react';
import './Footer.css';

export default function Footer({ lokasi }) {
  return (
    <footer className="footer-wrap">
      <div className="footer-inner">
        <span className="footer-copy">© {new Date().getFullYear()} Dinda Jelita</span>
      </div>
    </footer>
  );
}
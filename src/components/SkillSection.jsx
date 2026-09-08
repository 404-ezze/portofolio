import React from 'react';
import './SkillSection.css';

const supportingIcons = {
  Tableau: 'tableau',
  'Looker Studio': 'looker',
  MySQL: 'mysql',
  phpMyAdmin: 'phpmyadmin',
  QGIS: 'qgis',
  'Google Earth Pro': 'google', 
  PHP: 'php',
  Laravel: 'laravel',
  Ionic: 'ionic',
  Canva: 'canva',
};

export default function SkillSection({ keahlian, analisis, nonTeknis }) {
  return (
    <section className="toolkit-panel" id="skills">
      {/* Kolom Kiri: Intro & Pendukung */}
      <div className="toolkit-panel__intro">
        <p className="toolkit-panel__eyebrow">03 — Toolkit & strengths</p>
        <h2 className="toolkit-panel__title">Tools I use<br /><em>to make ideas real.</em></h2>
        <p className="toolkit-panel__description">
          Hard skills and human strengths I bring into every project, from system analysis to deployment delivery.
        </p>
        
        <div className="toolkit-panel__supporting">
          <div className="toolkit-panel__supporting-head">
            <span>Supporting Toolkit</span>
            <strong>{analisis.length} Tools</strong>
          </div>
          <div className="toolkit-panel__supporting-list">
            {analisis.map((tool) => (
              <span className="toolkit-panel__supporting-item" key={tool}>
                <img 
                  src={`https://cdn.simpleicons.org/${supportingIcons[tool] || tool.toLowerCase().replaceAll(' ', '')}`} 
                  alt={tool}
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Core Skills & Human Skills */}
      <div className="toolkit-panel__showcase">
        <p className="toolkit-panel__section-label">Core Engineering Skills</p>
        <div className="toolkit-panel__skills">
          {keahlian.map((skill) => (
            <article className="toolkit-panel__skill" key={skill.nama}>
              {/* Glow dihapus dari sini */}
              <div className="toolkit-panel__skill-main">
                <span className="toolkit-panel__skill-icon">
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.icon}`} 
                    alt={skill.nama}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </span>
                <div className="toolkit-panel__skill-text">
                  <p className="toolkit-panel__skill-category">{skill.kategori}</p>
                  <h3>{skill.nama}</h3>
                  <p>{skill.deskripsi}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* HUMAN SKILLS */}
        <div className="toolkit-panel__human">
          <div className="toolkit-panel__human-title">
            <h3>How I work</h3>
            <span>Professional Strengths</span>
          </div>
          <div className="toolkit-panel__human-list">
            {nonTeknis.map((item) => (
              <span key={item} className="human-skill-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
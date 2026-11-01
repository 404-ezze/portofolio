
import React from 'react';
import './SkillSection.css';
import ScrollReveal from './animations/ScrollReveal';

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
    <section className="toolkit-panel toolkit-panel--reverse" id="skills">

      {/* LEFT: SKILLS SHOWCASE */}
      <div className="toolkit-panel__showcase">

        <ScrollReveal animation="slide-left" duration={800}>
          <p className="toolkit-panel__section-label">
            Core Engineering Skills
          </p>
        </ScrollReveal>

        <div className="toolkit-panel__skills">
          {keahlian.map((skill, index) => (
            <ScrollReveal
              key={skill.nama}
              animation="fade-up"
              delay={index * 100}
              duration={750}
            >
              <article className="toolkit-panel__skill">
                <div className="toolkit-panel__skill-main">
                  <span className="toolkit-panel__skill-icon">
                    <img
                      src={`https://cdn.simpleicons.org/${skill.icon}`}
                      alt={skill.nama}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </span>

                  <div className="toolkit-panel__skill-text">
                    <p className="toolkit-panel__skill-category">
                      {skill.kategori}
                    </p>
                    <h3>{skill.nama}</h3>
                    <p>{skill.deskripsi}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* SUPPORTING TOOLKIT */}


        {/* HUMAN SKILLS */}
        <ScrollReveal animation="fade-up" delay={200}>
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
        </ScrollReveal>

      </div>

      {/* RIGHT: INTRO */}
      <ScrollReveal
  animation="slide-right"
  className="toolkit-panel__intro-reveal"
>
  <div className="toolkit-panel__intro">
    <p className="toolkit-panel__eyebrow">03 — Toolkit & strengths</p>

    <h2 className="toolkit-panel__title">
      The Capabilities Behind<br />
      <em>Effective Digital Solutions.</em>
    </h2>

    <p className="toolkit-panel__description">
      Hard skills and human strengths I bring into every project,
      from system analysis to deployment delivery.
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
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span>{tool}</span>
          </span>
        ))}
      </div>
    </div>
  </div>
</ScrollReveal>

    </section>
  );
}

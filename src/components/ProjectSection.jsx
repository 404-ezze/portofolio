import React from 'react';
import './ProjectSection.css';
import { Link } from 'react-router-dom';

export default function ProjectSection({ proyek }) {
  if (!proyek || proyek.length === 0) return null;

  return (
    <section className="section-frame work-section" id="work">
      <div className="section-heading">
        <p className="section-kicker">01 — Selected work</p>
        <div>
          <h2>Work that sits<br /><em>between data &amp; people.</em></h2>
          <p className="heading-note">Projects shaped by real operational needs, from government systems to marine data.</p>
        </div>
      </div>
      
      <div className="project-grid">
        {proyek.map((item, index) => {
          const detailUrl = `/project/${index + 1}`;
          const imageUrl = `/images/project/Project${index + 1}.jpg`;

          return (
            <article className={`project-card project-${index + 1}`} key={item.id || index}>
              
              <Link to={detailUrl} className="project-visual-link">
                <div className="project-visual">
                  <img 
                    src={imageUrl} 
                    alt={item.judul} 
                    className="project-image-bg"
                    onError={(e) => { e.target.src = '/images/project/Project1.jpg'; }}
                  />
                  <span className="project-number">0{index + 1}</span>
                  <div className="visual-lines" />
                  <b className="project-type">{item.tipe || 'System Info'}</b>
                </div>
              </Link>
              
              <div className="project-meta">
                <p>{item.teknologi ? item.teknologi.join('  /  ') : ''}</p>
                
                <Link to={detailUrl} className="project-title-link">
                  <h3>{item.judul}</h3>
                </Link>
                
                <p className="project-description">{item.deskripsi}</p>
                
                <a href="#contact" className="discuss-link">Discuss project <span>↗</span></a>
              </div>
              
            </article>
          );
        })}
      </div>
    </section>
  );
}
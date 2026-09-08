import React from 'react';
import './Publications.css'; 

export default function Publications({ karya }) {
  if (!karya || karya.length === 0) return null;

  return (
    <section className="section-frame credentials-section">
      <div className="section-heading">
        <p className="section-kicker">04 — Publications</p>
        <div>
          <h2>Research that<br /><em>keeps me curious.</em></h2>
        </div>
      </div>
      
      <div className="publication-list publication-grid">
        {karya.map((item, index) => (
          <article key={index} className="academic-journal-card">
            
            <div className="journal-badges">
              <span className="badge-type">Research Article</span>
              <span className="badge-year">{new Date().getFullYear()}</span>
            </div>
            
            {/* 2. Judul */}
            <h3 className="journal-title">{item.judul}</h3>
            
            {/* 3. Penjelasan (Abstrak) */}
            <div className="journal-abstract-section">
              <p className="journal-abstract">{item.detail}</p>
            </div>
            
            {/* 4. DOI Langsung di bawah penjelasan */}
            <div className="journal-doi">
              <span className="doi-text">DOI: https://doi.org/10.35308/jlik.v6i1.9774</span>
            </div>
            
            {/* 5. Tautan View More Minimalis */}
            <footer className="journal-footer">
              <a href="#" className="view-more-link">
                View more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </footer>

          </article>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import './Publications.css';

export default function Publications({ karya }) {
  if (!karya || karya.length === 0) return null;

  return (
    <section className="section-frame credentials-section">
      <div className="about-panel__intropub">
        <p className="section-kicker">04 — Publications</p>
          <h2 className="about-panel__title">Research that<br /><em>keeps me curious.</em></h2>
      </div>
      
      <div className="publication-container">
        {karya.map((item, index) => {
          const formattedIndex = String(index + 1).padStart(2, '0');
          const doiUrl = item.doi || 'https://doi.org/10.35308/jlik.v6i1.9774';

          return (
            <article key={index} className="publication-card">
              {/* 1. Nomor urut */}
              <span className="pub-number">{formattedIndex}</span>

              {/* 2. Kategori & Tahun */}
              <div className="pub-meta">
                <span className="pub-type">{item.tipe || 'Research Article'}</span>
                <span className="pub-dot">•</span>
                <span className="pub-year">{item.tahun || new Date().getFullYear()}</span>
              </div>

              {/* 3. Judul & Ringkasan */}
              <h3 className="pub-title">{item.judul}</h3>
              <p className="pub-desc">{item.detail || item.deskripsi}</p>

              {/* 4. Metadata Jurnal (Volume, Nomor, Halaman) */}
              <div className="pub-journal-meta">
                <span className="journal-name">{item.jurnal || 'Jurnal Ilmu Kelautan'}</span>
                <span className="journal-issue">{item.edisi || 'Vol. 2 No. 1, 2024 • Hal. 12–24'}</span>
              </div>

              {/* 5. Tautan DOI Footer */}
              <a 
                href={doiUrl.startsWith('http') ? doiUrl : `https://${doiUrl}`} 
                target="_blank" 
                rel="noreferrer" 
                className="pub-doi-link"
              >
                <span>DOI: {doiUrl}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
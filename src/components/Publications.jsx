
import React from 'react';
import './Publications.css';
import ScrollReveal from './animations/ScrollReveal';

export default function Publications({ karya }) {
  if (!Array.isArray(karya) || karya.length === 0) return null;

  return (
    <section
      className="section-frame credentials-section"
      id="publications"
    >
      {/* Publication Heading */}
      <ScrollReveal animation="fade-up" duration={800}>
        <div className="about-panel__intropub">
          <p className="section-kicker">04 — Publications</p>

          <div className="publication-heading-content">
            <h2 className="about-panel__title">
              Learning, researching, <br />
              <em> and building through knowledge</em>
            </h2>

            <p className="cert-description">
              A collection of research and publications exploring marine
              science, data analysis, and technology through applied research.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Publication Cards */}
      <div className="publication-container">
        {karya.map((item, index) => {
          const formattedIndex = String(index + 1).padStart(2, '0');
          const doiUrl = item.doi || '';

          const validDoiUrl = doiUrl
            ? doiUrl.startsWith('http')
              ? doiUrl
              : `https://${doiUrl}`
            : '';

          return (
            <ScrollReveal
              key={item.id || index}
              animation="paper"
              delay={index * 180}
              duration={1100}
              className="publication-card-reveal"
            >
              <article className="publication-card">

                <span className="pub-number">
                  {formattedIndex}
                </span>

                <div className="pub-meta">
                  <span className="pub-type">
                    {item.tipe || 'Research Article'}
                  </span>

                  <span className="pub-dot">•</span>

                  <span className="pub-year">
                    {item.tahun || new Date().getFullYear()}
                  </span>
                </div>

                <h3 className="pub-title">
                  {item.judul}
                </h3>

                <p className="pub-desc">
                  {item.detail || item.deskripsi}
                </p>

                <div className="pub-journal-meta">
                  <span className="journal-name">
                    {item.jurnal || 'Jurnal Ilmu Kelautan'}
                  </span>

                  <span className="journal-issue">
                    {item.edisi || 'Vol. 2 No. 1, 2024 • Hal. 12–24'}
                  </span>
                </div>

                {validDoiUrl && (
                  <a
                    href={validDoiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-doi-link"
                  >
                    <span>DOI: {doiUrl}</span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}

              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

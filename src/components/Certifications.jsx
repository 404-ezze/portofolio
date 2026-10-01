import React, { useState } from 'react';
import './Certifications.css';

export default function Certifications({ sertifikasi }) {
  const [selectedCert, setSelectedCert] = useState(null);

  if (!sertifikasi || sertifikasi.length === 0) return null;

  const getIssuerIcon = (penerbit = '') => {
    const pub = penerbit.toLowerCase();

    if (pub.includes('huawei')) {
      return (
        <svg viewBox="0 0 24 24" fill="#E4002B" className="issuer-svg">
          <path d="M12 4.5c-.7 1.4-1.2 3.1-1.2 4.7 0 1.2.3 2.3.8 3.3.4-.9.9-2.1 1.2-3.3.3-1.6.1-3.3-.8-4.7zm3.2 1.4c-.2 1.6-.7 3.3-1.5 4.6-.6 1-1.4 1.8-2.3 2.5.8-.5 1.7-1.3 2.4-2.3.9-1.3 1.5-3.1 1.4-4.8zm-6.4 0c-.1 1.7.5 3.5 1.4 4.8.7 1 1.6 1.8 2.4 2.3-.9-.7-1.7-1.5-2.3-2.5-.8-1.3-1.3-3-1.5-4.6zm9.2 3.4c-.6 1.5-1.5 3-2.6 4-.9.8-1.9 1.4-3 1.8 1-.3 2.1-.9 3-1.8 1.1-1.1 2-2.5 2.6-4zm-12 0c.6 1.5 1.5 2.9 2.6 4 .9.9 2 1.5 3 1.8-1.1-.4-2.1-1-3-1.8-1.1-1-2-2.5-2.6-4zm14 4.3c-.9 1.3-2.2 2.5-3.6 3.1-1 .5-2.2.8-3.4.9 1.1-.2 2.3-.6 3.3-1.3 1.4-.9 2.6-1.8 3.7-2.7zm-16 0c1.1.9 2.3 1.8 3.7 2.7 1 .7 2.2 1.1 3.3 1.3-1.2-.1-2.4-.4-3.4-.9-1.4-.6-2.7-1.8-3.6-3.1zm12.3 2.9c-1.1.9-2.6 1.6-4.1 1.8-.9.2-1.9.2-2.8.1.9.1 1.9.1 2.8 0 1.5-.3 3-.9 4.1-1.9zm-8.6 0c1.1 1 2.6 1.6 4.1 1.9.9.1 1.9.1 2.8 0-.9.1-1.9.1-2.8-.1-1.5-.2-3-.9-4.1-1.8z" />
        </svg>
      );
    }

    if (pub.includes('google')) {
      return (
        <svg viewBox="0 0 24 24" className="issuer-svg">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>
      );
    }

    if (pub.includes('microsoft')) {
      return (
        <svg viewBox="0 0 24 24" className="issuer-svg">
          <path fill="#F25022" d="M1 1h10v10H1z"/>
          <path fill="#7FBA00" d="M13 1h10v10H13z"/>
          <path fill="#00A4EF" d="M1 13h10v10H1z"/>
          <path fill="#FFB900" d="M13 13h10v10H13z"/>
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0574BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="issuer-svg">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    );
  };

  const handleOpenCert = (item) => {
    // Cek properti file, gambar, atau link dari data
    const certFile = item.file || item.gambar || item.link || (item.penerbit?.toLowerCase().includes('huawei') ? '/images/project/SertifHuawei.png' : null);
    setSelectedCert({
      ...item,
      previewUrl: certFile
    });
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="cert-section" id="certifications">
      <div className="cert-header">
        <p className="cert-eyebrow">05 — Certifications</p>
        <h2 className="cert-heading">Always learning,<br /><em>always evolving.</em></h2>
      </div>

      <div className="cert-grid">
        {sertifikasi.map((item, index) => {
          const formattedNumber = String(index + 1).padStart(2, '0');

          return (
            <div
              key={item.nama || index}
              onClick={() => handleOpenCert(item)}
              className="cert-card"
              role="button"
              tabIndex={0}
            >
              {/* Logo / Ikon Penerbit */}
              <div className="cert-card__icon">
                {getIssuerIcon(item.penerbit)}
              </div>

              {/* Konten Utama */}
              <div className="cert-card__body">
                <span className="cert-card__number">{formattedNumber}</span>
                <h3 className="cert-card__title">{item.nama}</h3>
                <p className="cert-card__issuer">{item.penerbit}</p>
                <p className="cert-card__date">{item.tanggal}</p>
              </div>

              {/* Ikon Zoom / Preview */}
              <div className="cert-card__external">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                </svg>
              </div>
            </div>
          );
        })}

        {/* Kartu Kutipan Inspiratif */}
        <div className="cert-quote-card">
          <div className="quote-mark">“</div>
          <div className="quote-content">
            <p className="quote-text">
              Small steps in learning<br />create big opportunities.
            </p>
            <div className="quote-footer">
              <span className="quote-line"></span>
              <span className="quote-kicker">KEEP LEARNING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Pop-up Preview Sertifikat */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={handleCloseModal}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <header className="cert-modal-header">
              <div>
                <span className="cert-modal-kicker">{selectedCert.penerbit}</span>
                <h3 className="cert-modal-title">{selectedCert.nama}</h3>
              </div>
              <button 
                type="button" 
                className="cert-modal-close" 
                onClick={handleCloseModal}
                aria-label="Tutup preview"
              >
                ✕
              </button>
            </header>

            <div className="cert-modal-viewer">
              {selectedCert.previewUrl ? (
                selectedCert.previewUrl.endsWith('.pdf') ? (
                  <iframe 
                    src={selectedCert.previewUrl} 
                    title={selectedCert.nama}
                    className="cert-modal-iframe"
                  />
                ) : (
                  <img 
                    src={selectedCert.previewUrl} 
                    alt={selectedCert.nama} 
                    className="cert-modal-image"
                  />
                )
              ) : (
                <div className="cert-modal-placeholder">
                  <p>Berkas sertifikat digital belum tersedia.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
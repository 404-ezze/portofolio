import React from 'react';
import './Certifications.css';

export default function Certifications({ sertifikasi }) {
  if (!sertifikasi || sertifikasi.length === 0) return null;

  return (
    <section className="cert-section" id="certifications">
      <div className="cert-header">
        <p className="cert-eyebrow">05 — Certifications</p>
        <h2 className="cert-heading">Always learning,<br /><em>always evolving.</em></h2>
      </div>
      
      <div className="cert-list">
        {sertifikasi.map((item, index) => (
          <a 
            key={item.nama}
            href={item.link || `/certificates/${item.nama.toLowerCase().replaceAll(' ', '-')}.pdf`}
            target="_blank"
            rel="noreferrer"
            className="cert-item"
          >
            {/* Nomor Urut */}
            <div className="cert-number">
              {String(index + 1).padStart(2, '0')}
            </div>
            
            {/* Konten Teks Hitam Mutlak */}
            <div className="cert-content">
              <h3 className="cert-title">{item.nama}</h3>
              <p className="cert-meta">{item.penerbit} · {item.tanggal}</p>
            </div>
            
            {/* Tombol Aksi & Panah Vektor */}
            <div className="cert-action">
              <span>View Certificate</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            {/* Efek Pop-up Melayang saat Hover */}
            <div className="cert-popup">
              <div className="cert-popup-inner">
                <span className="popup-badge">Verified Credential</span>
                <h4 className="popup-title">{item.nama}</h4>
                <p className="popup-desc">
                  Sertifikasi resmi yang diterbitkan oleh <strong>{item.penerbit}</strong> pada tahun {item.tanggal}. Memvalidasi kompetensi fundamental dan keahlian teknis terkait.
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
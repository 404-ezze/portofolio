import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { dataPortofolio } from '../data/dataPortofolio';
import './Project1.css'; // Menggunakan styling yang sudah ada

export default function ProjectDetail() {
  const { id } = useParams();
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Temukan proyek berdasarkan ID URL
  const project = dataPortofolio.proyek.find((p) => String(p.id) === String(id));

  // Penanganan jika ID tidak ditemukan
  if (!project) {
    return (
      <div className="project-detail-page" style={{ textAlign: 'center', padding: '120px 24px' }}>
        <Navbar />
        <h2>Proyek Tidak Ditemukan</h2>
        <p style={{ margin: '16px 0 24px', color: '#64748b' }}>Halaman proyek yang Anda cari tidak tersedia.</p>
        <Link to="/#work" className="action-btn">Kembali ke Portofolio</Link>
      </div>
    );
  }

  // Fallback data jika properti detail belum diisi
  const instansi = project.instansi || 'Project Showcase';
  const periode = project.periode || '2025 — 2026';
  const liveUrl = project.liveUrl || '';
  const studiKasus = project.studiKasus;
  const galeri = project.galeri || [{ img: project.gambar, caption: '01 / Tampilan Sistem' }];

  // Interaksi Drag Slider Galeri
  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add('active');
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    sliderRef.current?.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown = false;
    sliderRef.current?.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="project-detail-page">
      <Navbar />

      {/* Header Kartu Informasi Proyek */}
      <header className="project-header-card">
        <div className="header-card__left">
          <nav className="header-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="breadcrumb-chevron">&gt;</span>
            <Link to="/#work">Daftar Proyek</Link>
            <span className="breadcrumb-chevron">&gt;</span>
            <span className="breadcrumb-current">Detail Proyek</span>
          </nav>

          <h1 className="header-title">{project.judul}</h1>

          {/* Chips Teknologi */}
          <div className="header-chips">
            {project.teknologi && project.teknologi.map((tech, idx) => (
              <span 
                key={tech} 
                className={`header-chip ${idx === 0 ? 'header-chip--highlight' : ''}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="header-desc">{project.deskripsi}</p>
        </div>

        <div className="header-card__right">
          {/* 1. Nama Instansi */}
          <div className="meta-item">
            <div className="meta-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
              </svg>
            </div>
            <div className="meta-item__text">
              <span className="meta-label">Nama Instansi</span>
              <p className="meta-value">{instansi}</p>
            </div>
          </div>

          {/* 2. Nama / Kategori Proyek */}
          <div className="meta-item">
            <div className="meta-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="meta-item__text">
              <span className="meta-label">Tipe &amp; Kategori</span>
              <p className="meta-value">{project.tipe || project.kategori}</p>
            </div>
          </div>

          <div className="meta-item">
            <div className="meta-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="meta-item__text">
              <span className="meta-label">Periode Proyek</span>
              <p className="meta-value">{periode}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="detail-cover">
        <img src={project.gambar} alt={project.judul} />
      </div>

      {studiKasus && (
        <article className="detail-content-zigzag">
          {studiKasus.tantangan && (
            <div className="zigzag-block block-left">
              <div className="zigzag-number">01</div>
              <div className="zigzag-text">
                <h2>Latar Belakang &amp; Tantangan Sistem</h2>
                <p>{studiKasus.tantangan}</p>
              </div>
            </div>
          )}

          {studiKasus.arsitektur && (
            <div className="zigzag-block block-right">
              <div className="zigzag-text">
                <h2>Pendekatan Arsitektur &amp; Solusi Teknis</h2>
                <p>{studiKasus.arsitektur.deskripsi}</p>
                {studiKasus.arsitektur.poinSolusi && (
                  <ul className="solution-list">
                    {studiKasus.arsitektur.poinSolusi.map((pt, i) => (
                      <li key={i}>
                        <strong>{pt.label}:</strong> {pt.desc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="zigzag-number">02</div>
            </div>
          )}

          {studiKasus.hasil && (
            <div className="zigzag-block block-left">
              <div className="zigzag-number">03</div>
              <div className="zigzag-text">
                <h2>Hasil &amp; Dampak Operasional</h2>
                <p>{studiKasus.hasil}</p>
              </div>
            </div>
          )}
        </article>
      )}

      {galeri.length > 0 && (
        <section className="gallery-section">
          <div className="gallery-header">
            <h2>Dokumentasi &amp; Antarmuka Sistem</h2>
            <p>Geser ke kiri atau kanan untuk melihat detail tangkapan layar antarmuka aplikasi.</p>
          </div>

          <div
            className="gallery-slider"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {galeri.map((g, idx) => (
              <div className="gallery-item" key={idx}>
                <img src={g.img} alt={g.caption || project.judul} draggable="false" />
                <span>{g.caption || `0${idx + 1} / Tampilan Antarmuka`}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="detail-footer">
        <p>Tertarik mendiskusikan rancangan sistem atau studi kasus serupa?</p>
        <div className="footer-actions">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="action-btn-secondary">
              Visit Live Product ↗
            </a>
          )}
          <Link to="/#contact" className="action-btn">Mari Berdiskusi ↗</Link>
        </div>
      </div>
    </div>
  );
}
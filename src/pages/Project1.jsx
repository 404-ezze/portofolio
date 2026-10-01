import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Impor komponen bersama
import './Project1.css';

export default function Project1() {
  const liveUrl = 'https://example.com';

  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

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
      {/* Cukup panggil komponen ini */}
      <Navbar />

      {/* Header Kartu Dua Kolom */}
      <header className="project-header-card">
        <div className="header-card__left">
          <nav className="header-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="breadcrumb-chevron">&gt;</span>
            <Link to="/#work">Daftar Proyek</Link>
            <span className="breadcrumb-chevron">&gt;</span>
            <span className="breadcrumb-current">Detail Proyek</span>
          </nav>

          <h1 className="header-title">Sistem Suami Peduli Ibu dan Anak (SPSPIA)</h1>

          <div className="header-chips">
            <span className="header-chip header-chip--highlight">Laravel</span>
            <span className="header-chip">FullStack</span>
            <span className="header-chip">SQL</span>
            <span className="header-chip">IT Governance</span>
            <span className="header-chip">Role-Based Access Control (RBAC)</span>
          </div>

          <p className="header-desc">
            Pengembangan sistem informasi untuk mendukung layanan pemberdayaan perempuan dan perlindungan anak di Kabupaten Indramayu.
          </p>
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
      <p className="meta-value">Dinas Komunikasi dan Informatika Kabupaten Indramayu</p>
    </div>
  </div>

  {/* 2. Nama Proyek */}
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
      <span className="meta-label">Nama Proyek</span>
      <p className="meta-value">Sistem Suami Peduli Ibu dan Anak</p>
    </div>
  </div>

  {/* 3. Periode Proyek */}
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
      <p className="meta-value">September 2025 – Des 2025</p>
    </div>
  </div>
        </div>
      </header>

      {/* Konten Cover, Zig-zag, Galeri & Footer tetap sama */}
      <div className="detail-cover">
        <img src="/images/project/Project1.jpg" alt="SPSPIA Dashboard" />
      </div>

      <article className="detail-content-zigzag">
        <div className="zigzag-block block-left">
          <div className="zigzag-number">01</div>
          <div className="zigzag-text">
            <h2>Latar Belakang & Tantangan Sistem</h2>
            <p>
              Desentralisasi pengelolaan data kesehatan keluarga di tingkat daerah sering kali memicu hambatan struktural, mulai dari fragmentasi informasi, latensi pelaporan manual, hingga minimnya instrumen pelibatan aktif suami. Tanpa kehadiran platform digital yang terpusat, para pemangku kebijakan di instansi pemerintahan kesulitan mengakses metrik analitik yang valid secara <em>real-time</em> untuk intervensi dini.
            </p>
          </div>
        </div>

        <div className="zigzag-block block-right">
          <div className="zigzag-text">
            <h2>Pendekatan Arsitektur & Solusi Teknis</h2>
            <p>
              Pengembangan diformulasikan menggunakan kerangka kerja <strong>Laravel</strong> dengan orientasi pada skalabilitas dan keamanan data yang ketat. Proses perancangan diawali dengan pemodelan entitas relasional (ERD) untuk memetakan hierarki data wilayah, rekam medis, hingga tingkat partisipasi keluarga.
            </p>
            <ul className="solution-list">
              <li><strong>Role-Based Access Control (RBAC):</strong> implementasi otorisasi berlapis untuk memisahkan hak akses fungsional antara Administrator Kabupaten, Petugas Lapangan, dan Akun Keluarga secara aman.</li>
              <li><strong>Optimized Database Models:</strong> pengaturan relasi model basis data guna memastikan latensi kueri rekam medis berjalan instan tanpa redundansi penyimpanan.</li>
              <li><strong>Clean Interface Design:</strong> desain antarmuka modular yang ramah pengguna awam sekaligus memenuhi standar estetika instansi pemerintahan.</li>
            </ul>
          </div>
          <div className="zigzag-number">02</div>
        </div>

        <div className="zigzag-block block-left">
          <div className="zigzag-number">03</div>
          <div className="zigzag-text">
            <h2>Hasil & Dampak Operasional</h2>
            <p>
              Sistem berhasil dideploy secara fungsional untuk merampingkan birokrasi rekapitulasi data konvensional. Transformasi ini memangkas durasi pelaporan dari yang mulanya memakan waktu berhari-hari menjadi dasbor analitik instan, memberikan akselerasi signifikan bagi instansi dalam merumuskan kebijakan preventif kesehatan keluarga.
            </p>
          </div>
        </div>
      </article>

      <section className="gallery-section">
        <div className="gallery-header">
          <h2>Dokumentasi & Antarmuka Sistem</h2>
          <p>Geser ke kiri atau kanan menggunakan mouse untuk melihat detail tangkapan layar antarmuka aplikasi.</p>
        </div>

        <div
          className="gallery-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="gallery-item">
            <img src="/images/project/Project1.jpg" alt="Dashboard Utama SPSPIA" draggable="false" />
            <span>01 / Dasbor Utama & Statistik</span>
          </div>
          <div className="gallery-item">
            <img src="/images/project/Project1.jpg" alt="Modul Role Permissions" draggable="false" />
            <span>02 / Pengaturan Role & Hak Akses</span>
          </div>
          <div className="gallery-item">
            <img src="/images/project/Project1.jpg" alt="Formulir Monitoring" draggable="false" />
            <span>03 / Modul Input Data Keluarga</span>
          </div>
          <div className="gallery-item">
            <img src="/images/project/Project1.jpg" alt="Laporan Rekapitulasi" draggable="false" />
            <span>04 / Panel Laporan & Ekspor Data</span>
          </div>
        </div>
      </section>

      <div className="detail-footer">
        <p>Tertarik mendiskusikan rancangan sistem atau studi kasus serupa?</p>
        <div className="footer-actions">
          <Link to="/#contact" className="action-btn">Mari Berdiskusi ↗</Link>
        </div>
      </div>
    </div>
  );
}
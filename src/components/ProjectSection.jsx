import React, { useRef } from 'react';
import './ProjectSection.css';
import { Link } from 'react-router-dom';

// Pemetaan judul kategori resmi
const normalizeCategoryTitle = (rawCategory = '') => {
  const cat = rawCategory.trim().toLowerCase();
  if (cat.includes('ui') || cat.includes('ux')) return "UI/UX'S PROJECT";
  if (cat.includes('web') || cat.includes('app') || cat.includes('system') || cat.includes('development')) {
    return "WEB/APP SYSTEM";
  }
  if (cat.includes('gis') || cat.includes('geo') || cat.includes('spatial') || cat.includes('analytic')) {
    return "GIS";
  }
  return rawCategory.toUpperCase() || 'OTHER PROJECTS';
};

export default function ProjectSection({ proyek }) {
  if (!proyek || proyek.length === 0) return null;

  // Mengelompokkan proyek murni berdasarkan properti "kategori" di dataPortofolio.js
  const groupedProjects = proyek.reduce((acc, item) => {
    const categoryKey = normalizeCategoryTitle(item.kategori);
    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }
    acc[categoryKey].push(item);
    return acc;
  }, {});

  // Urutan kategori yang diinginkan
  const desiredOrder = ["UI/UX'S PROJECT", "WEB/APP SYSTEM", "GIS"];
  const existingCategories = Object.keys(groupedProjects);
  const sortedCategories = [
    ...desiredOrder.filter((cat) => existingCategories.includes(cat)),
    ...existingCategories.filter((cat) => !desiredOrder.includes(cat))
  ];

  return (
    <section className="section-frame work-section" id="work">
      {/* Header Utama Editorial */}
      <div className="section-heading">
        <p className="section-kicker">01 — Selected work</p>
        <div className="section-heading-right">
          <h2>
            Work that sits<br />
            <em>between data &amp; people.</em>
          </h2>
          <p className="heading-note">
            Projects shaped by real operational needs, from government systems to marine data.
          </p>
        </div>
      </div>

      {/* Daftar Kategori Karosel Dinamis */}
      <div className="categories-stack">
        {sortedCategories.map((categoryTitle, idx) => {
          const items = groupedProjects[categoryTitle];
          const align = idx % 2 === 0 ? 'left' : 'right';

          return (
            <CategoryCarouselRow
              key={categoryTitle}
              title={categoryTitle}
              align={align}
              items={items}
            />
          );
        })}
      </div>
    </section>
  );
}

function CategoryCarouselRow({ title, align, items }) {
  const trackRef = useRef(null);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      const scrollStep = trackRef.current.clientWidth * 0.75;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollStep : scrollStep,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`category-block align-${align}`}>
      {/* Folder Tab Header */}
      <div className="category-file-tab-wrap">
        <div className="file-tab">
          <svg
            className="file-tab__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          <span className="file-tab__label">{title}</span>
        </div>
        <div className="file-tab__line" />
      </div>

      {/* Row Karosel */}
      <div className="carousel-row-container">
        <button
          type="button"
          className="side-nav-btn prev-btn"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          ←
        </button>

        <div className="carousel-track" ref={trackRef}>
          {items.map((item, index) => {
            const projectId = item.id ?? index + 1;
            const detailUrl = `/project/${projectId}`;
            const imageUrl = item.gambar || `/images/project/Project${projectId}.jpg`;

            return (
              <article className={`project-card project-${projectId}`} key={projectId}>
                <Link to={detailUrl} className="project-visual-link">
                  <div className="project-visual">
                    <img
                      src={imageUrl}
                      alt={item.judul}
                      className="project-image-bg"
                      onError={(e) => {
                        e.target.src = '/images/project/Project1.jpg';
                      }}
                    />
                    {/* Animasi garis seragam untuk seluruh kartu */}
                    <div className="visual-lines" />
                  </div>
                </Link>

                <div className="project-meta">
                  <p className="project-tech">
                    {Array.isArray(item.teknologi) ? item.teknologi.join('  /  ') : item.teknologi || ''}
                  </p>

                  <Link to={detailUrl} className="project-title-link">
                    <h3>{item.judul}</h3>
                  </Link>

                  <p className="project-description">{item.deskripsi}</p>

                  <a href="#contact" className="discuss-link">
                    Discuss project <span>↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="side-nav-btn next-btn"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );
}
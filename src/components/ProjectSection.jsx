import React, { useMemo, useRef, useState, useEffect } from 'react';
import './ProjectSection.css';
import ScrollReveal from './animations/ScrollReveal';

const normalizeCategoryTitle = (rawCategory = '') => {
  const cat = String(rawCategory).trim().toLowerCase();

  if (cat.includes('ui') || cat.includes('ux')) {
    return "UI/UX'S PROJECT";
  }

  if (
    cat.includes('web') ||
    cat.includes('app') ||
    cat.includes('system') ||
    cat.includes('development')
  ) {
    return 'WEB/APP SYSTEM';
  }

  if (
    cat.includes('gis') ||
    cat.includes('geo') ||
    cat.includes('spatial') ||
    cat.includes('analytic')
  ) {
    return 'GIS';
  }

  return String(rawCategory).toUpperCase() || 'OTHER PROJECTS';
};

export default function ProjectSection({ proyek }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const trackRef = useRef(null);

  const groupedProjects = useMemo(() => {
    return (proyek || []).reduce((acc, item) => {
      const category = normalizeCategoryTitle(item.kategori);

      if (!acc[category]) acc[category] = [];
      acc[category].push(item);

      return acc;
    }, {});
  }, [proyek]);

  const categories = [
    'ALL',
    "UI/UX'S PROJECT",
    'WEB/APP SYSTEM',
    'GIS'
  ];

  const activeProjects = activeCategory === 'ALL'
    ? (proyek || [])
    : (groupedProjects[activeCategory] || []);

  const totalProjects = activeProjects.length;

  const projectGallery = selectedProject
    ? (
        selectedProject.galeri?.length
          ? selectedProject.galeri
          : selectedProject.gallery?.length
            ? selectedProject.gallery.map((item) =>
                typeof item === 'string' ? { img: item, caption: '' } : item
              )
            : selectedProject.gambar
              ? [{ img: selectedProject.gambar, caption: '' }]
              : []
      )
    : [];

  const currentGalleryItem = projectGallery[activeImage] || projectGallery[0];

  const currentImage =
    currentGalleryItem?.img ||
    selectedProject?.gambar ||
    '/images/project/Project1.jpg';

  const caseStudy = selectedProject?.studiKasus || {};
  const solutionPoints = caseStudy.arsitektur?.poinSolusi || [];

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (showLightbox) {
          setShowLightbox(false);
        } else {
          closeProject();
        }
      }

      if (!showLightbox && event.key === 'ArrowRight') {
        navigateProject(1);
      }

      if (!showLightbox && event.key === 'ArrowLeft') {
        navigateProject(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, selectedIndex, showLightbox, activeProjects]);

  if (!proyek?.length) return null;

  const handleScroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector('.project-card');
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 18;
    const distance = card.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: direction * distance,
      behavior: 'smooth'
    });
  };

  const openProject = (item, index) => {
    setSelectedProject(item);
    setSelectedIndex(index);
    setActiveImage(0);
    setShowLightbox(false);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setShowLightbox(false);
    setActiveImage(0);
  };

  const navigateProject = (direction) => {
    if (!activeProjects.length) return;

    const nextIndex =
      (selectedIndex + direction + activeProjects.length) %
      activeProjects.length;

    setSelectedIndex(nextIndex);
    setSelectedProject(activeProjects[nextIndex]);
    setActiveImage(0);
    setShowLightbox(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeProject();
    }
  };

  return (
    <section className="section-frame work-section" id="work">

      <ScrollReveal animation="fade-up" duration={900}>
        <div className="work-editorial-heading">
          <div className="work-editorial-left">
            <p className="work-kicker">01 — Selected work</p>
          </div>

          <div className="work-heading-content">
            <h2 className="work-editorial-title">
              Work at the Intersection
              <br />
              <em> of Data &amp; People.</em>
            </h2>

            <p className="work-editorial-description">
              Projects shaped by operational needs, connecting technology, data, and real-world processes.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="work-container">

        <ScrollReveal animation="slide-left" delay={100}>
          <div className="work-topbar">
            <h3 className="work-section-title">Selected Work</h3>

            <span className="work-counter">
              01 <span>—</span>{' '}
              {String(totalProjects).padStart(2, '0')}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-right" delay={150}>
          <div className="work-category-nav" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`work-category-tab ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="work-divider" />

        <ScrollReveal animation="reveal-up" delay={200} duration={900}>
          <div className="work-carousel">
            <div
              className="project-track"
              ref={trackRef}
              key={activeCategory}
            >
              {activeProjects.map((item, index) => {
                const projectId = item.id ?? index + 1;

                const imageUrl =
                  item.galeri?.[0]?.img ||
                  item.gallery?.[0]?.img ||
                  item.gambar ||
                  `/images/project/Project${projectId}.jpg`;

                const rawTechnologies =
                  item.teknologi ||
                  item.technologies ||
                  item.tools ||
                  item.techStack ||
                  [];

                const technologies = Array.isArray(rawTechnologies)
                  ? rawTechnologies
                  : String(rawTechnologies)
                      .split(/[,|]/)
                      .map((tech) => tech.trim())
                      .filter(Boolean);

                const summary =
                  item.ringkasan ||
                  item.summary ||
                  item.deskripsi ||
                  '';

                const projectYear =
                  item.tahun ||
                  item.year ||
                  item.periode ||
                  '';

                return (
                  <article
                    className="project-card folder-card"
                    key={projectId}
                    style={{ '--card-index': index }}
                  >
                    <div className="folder-card-tab" aria-hidden="true" />

                    <div className="folder-card-inner">

                      {/* TECHNOLOGY BADGES */}
                      <div
                        className="folder-tech-list"
                        aria-label="Tools dan teknologi"
                      >
                        {technologies.length > 0 ? (
                          technologies.slice(0, 5).map((tech, techIndex) => (
                            <span
                              className="folder-tech-badge"
                              key={`${tech}-${techIndex}`}
                            >
                              {tech}
                            </span>
                          ))
                        ) : (
                          <span className="folder-tech-badge">
                            {normalizeCategoryTitle(item.kategori)}
                          </span>
                        )}
                      </div>

                      {/* PROJECT PREVIEW */}
                      <button
                        type="button"
                        className="project-image-link folder-preview-link"
                        aria-label={`Lihat ${item.judul}`}
                        onClick={() => openProject(item, index)}
                      >
                        <div className="project-image-wrap folder-image-wrap">
                          <img
                            src={imageUrl}
                            alt={item.judul}
                            className="project-image"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src =
                                '/images/project/Project1.jpg';
                            }}
                          />

                          <span className="project-image-overlay">
                            <span>Preview project ↗</span>
                          </span>
                        </div>
                      </button>

                      {/* PROJECT INFORMATION */}
                      <div className="project-content folder-project-content">

                        <div className="folder-project-heading">
                          <span className="folder-project-number">
                            PROJECT {String(index + 1).padStart(2, '0')}
                          </span>

                          {projectYear && (
                            <span className="folder-project-year">
                              {projectYear}
                            </span>
                          )}
                        </div>

                        <h3 className="project-title folder-project-title">
                          {item.judul}
                        </h3>

                        <p className="project-description folder-project-description">
                          {summary}
                        </p>

                        <button
                          type="button"
                          className="project-detail-link folder-detail-link"
                          onClick={() => openProject(item, index)}
                        >
                          Lihat detail project <span>↗</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={250}>
          <div className="work-carousel-footer">
            <p className="work-result-count">
              Showing{' '}
              <strong>{Math.min(3, totalProjects)}</strong>
              {' '}of{' '}
              <strong>{totalProjects}</strong>
              {' '}projects
            </p>

            <div className="work-carousel-controls">
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => handleScroll(-1)}
                aria-label="Project sebelumnya"
              >
                <span>←</span>
              </button>

              <button
                type="button"
                className="carousel-arrow"
                onClick={() => handleScroll(1)}
                aria-label="Project selanjutnya"
              >
                <span>→</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onMouseDown={handleOverlayClick}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Detail ${selectedProject.judul}`}
          >
            <div
              className="project-modal-content"
              key={selectedProject.id ?? selectedIndex}
            >
              <div className="project-modal-header">
                <span className="project-modal-label">
                  PROJECT PREVIEW
                </span>

                <div className="project-modal-header-right">
                  <span className="project-modal-counter">
                    {String(selectedIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(activeProjects.length).padStart(2, '0')}
                  </span>

                  <button
                    type="button"
                    className="project-modal-close"
                    onClick={closeProject}
                    aria-label="Tutup popup"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="project-modal-main">
                <div className="project-modal-gallery">
                  <button
                    type="button"
                    className="project-modal-main-image"
                    onClick={() => setShowLightbox(true)}
                    aria-label="Perbesar gambar project"
                  >
                    <img
                      src={currentImage}
                      alt={`${selectedProject.judul} - gambar ${activeImage + 1}`}
                      className="project-modal-image"
                      key={currentImage}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          '/images/project/Project1.jpg';
                      }}
                    />

                    <span className="project-image-expand">
                      <span>Perbesar</span>
                      <span>↗</span>
                    </span>
                  </button>

                  {projectGallery.length > 1 && (
                    <div className="project-thumbnail-list">
                      {projectGallery.map((image, index) => (
                        <button
                          type="button"
                          key={`${image.img || 'gallery'}-${index}`}
                          className={`project-thumbnail ${
                            activeImage === index ? 'active' : ''
                          }`}
                          onClick={() => setActiveImage(index)}
                          aria-label={`Tampilkan gambar ${index + 1}`}
                          aria-pressed={activeImage === index}
                        >
                          <img
                            src={image.img}
                            alt={
                              image.caption ||
                              `${selectedProject.judul} thumbnail ${index + 1}`
                            }
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="project-modal-info">
                  <span className="project-modal-category">
                    {selectedProject.tipe ||
                      selectedProject.jenis ||
                      normalizeCategoryTitle(selectedProject.kategori)}
                  </span>

                  <h2 className="project-modal-title">
                    {selectedProject.judul}
                  </h2>

                  <p className="project-modal-description">
                    {selectedProject.deskripsi}
                  </p>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-url"
                    >
                      Visit Live URL
                      <span>↗</span>
                    </a>
                  )}

                  {selectedProject.peran && (
                    <div className="project-modal-meta">
                      <span className="project-modal-meta-label">
                        PROJECT ROLE
                      </span>
                      <p className="project-modal-role">
                        {selectedProject.peran}
                      </p>
                    </div>
                  )}

                  <div className="project-modal-meta">
                    <span className="project-modal-meta-label">
                      TOOLS &amp; TECHNOLOGIES
                    </span>

                    <div className="project-modal-tech">
                      {(
                        Array.isArray(selectedProject.teknologi)
                          ? selectedProject.teknologi
                          : selectedProject.teknologi
                            ? [selectedProject.teknologi]
                            : []
                      ).map((tech, index) => (
                        <span className="project-tech-tag" key={index}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {currentGalleryItem?.caption && (
                <p className="project-gallery-caption">
                  {currentGalleryItem.caption}
                </p>
              )}

              <div className="project-modal-about">
                <span className="project-modal-about-label">
                  ABOUT THE PROJECT
                </span>

                <div className="project-about-grid">
                  <section className="project-about-block project-about-overview">
                    <h3>Project Overview</h3>

                    <p>
                      {selectedProject.about || selectedProject.deskripsi}
                    </p>

                    {(selectedProject.instansi || selectedProject.periode) && (
                      <div className="project-about-facts">
                        {selectedProject.instansi && (
                          <div>
                            <span>Organization</span>
                            <strong>{selectedProject.instansi}</strong>
                          </div>
                        )}

                        {selectedProject.periode && (
                          <div>
                            <span>Period</span>
                            <strong>{selectedProject.periode}</strong>
                          </div>
                        )}
                      </div>
                    )}
                  </section>

                  {(caseStudy.tantangan ||
                    caseStudy.arsitektur?.deskripsi ||
                    solutionPoints.length > 0) && (
                    <section className="project-about-block">
                      <h3>Challenge &amp; Approach</h3>

                      {caseStudy.tantangan && (
                        <div className="project-about-subsection">
                          <span className="project-about-eyebrow">
                            CHALLENGE
                          </span>
                          <p>{caseStudy.tantangan}</p>
                        </div>
                      )}

                      {caseStudy.arsitektur?.deskripsi && (
                        <div className="project-about-subsection">
                          <span className="project-about-eyebrow">
                            APPROACH
                          </span>
                          <p>{caseStudy.arsitektur.deskripsi}</p>
                        </div>
                      )}

                      {solutionPoints.length > 0 && (
                        <ul className="project-solution-list">
                          {solutionPoints.map((point, index) => (
                            <li key={`${point.label || 'solution'}-${index}`}>
                              {point.label && <strong>{point.label}</strong>}
                              {point.desc && <p>{point.desc}</p>}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  )}

                  {caseStudy.hasil && (
                    <section className="project-about-block project-about-outcome">
                      <h3>Outcome</h3>
                      <p>{caseStudy.hasil}</p>
                    </section>
                  )}
                </div>
              </div>

              <div className="project-modal-footer">
                <button
                  type="button"
                  className="project-modal-nav"
                  onClick={() => navigateProject(-1)}
                >
                  <span>←</span>
                  <span>Previous project</span>
                </button>

                <button
                  type="button"
                  className="project-modal-nav next"
                  onClick={() => navigateProject(1)}
                >
                  <span>Next project</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE LIGHTBOX */}
      {showLightbox && selectedProject && (
        <div
          className="project-lightbox"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowLightbox(false);
            }
          }}
        >
          <button
            type="button"
            className="project-lightbox-close"
            onClick={() => setShowLightbox(false)}
            aria-label="Tutup gambar"
          >
            ×
          </button>

          <img
            src={currentImage}
            alt={selectedProject.judul}
          />
        </div>
      )}
    </section>
  );
}
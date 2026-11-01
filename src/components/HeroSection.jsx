
import { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

const photos = [
  '/images/project/foto1.jpg',
  '/images/project/foto2.jpg',
  '/images/project/foto3.jpg',
];

export default function HeroSection({ profil }) {
  const heroRef = useRef(null);
  const animationTimerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        window.clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  const handleCardClick = (clickedIndex) => {
    if (isAnimating || cardOrder[0] !== clickedIndex) return;

    setIsAnimating(true);

    setCardOrder((currentOrder) => [
      ...currentOrder.slice(1),
      currentOrder[0],
    ]);

    animationTimerRef.current = window.setTimeout(() => {
      setIsAnimating(false);
      animationTimerRef.current = null;
    }, 650);
  };

  return (
    <section
      ref={heroRef}
      className={`hero-panel ${
        isVisible ? 'hero-active' : 'hero-inactive'
      }`}
      id="top"
    >
      <div className="hero-background-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="hero-panel__copy">
        <p className="hero-panel__eyebrow hero-reveal hero-delay-1">
          <span className="hero-eyebrow-line" />
          {profil.spesialisasi}
        </p>

        <div className="hero-panel__title-row">
          <h1 className="hero-panel__title">
            <span className="hero-title-line hero-reveal hero-delay-2">
              {profil.nama}
            </span>

            <span className="hero-title-line hero-title-accent hero-reveal hero-delay-3">
              <em>Builds Scalability</em>
            </span>
          </h1>
        </div>

        <p className="hero-panel__role hero-reveal hero-delay-4">
          {profil.gelar}
        </p>

        <p className="hero-panel__description hero-reveal hero-delay-5">
          {profil.deskripsi}
        </p>

        <div className="hero-panel__actions hero-reveal hero-delay-6">
          <a className="hero-panel__primary" href="#work">
            <span>Explore my work</span>
            <span className="hero-button-arrow">↗</span>
          </a>

          <a
            className="hero-panel__secondary"
            href={`mailto:${profil.email}`}
          >
            Get in touch
            <span className="hero-secondary-arrow">↗</span>
          </a>
        </div>

        <div className="hero-panel__scroll-indicator hero-reveal hero-delay-6">
          <span className="scroll-line" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>

      <div className="hero-panel__visual-wrap hero-visual-reveal">
        <div className="hero-panel__visual">
          {/* CONCENTRIC RINGS */}
          <div className="hero-visual-rings" aria-hidden="true">
            <span className="hero-ring hero-ring--outer" />
            <span className="hero-ring hero-ring--inner" />
            <span className="hero-ring hero-ring--core" />
          </div>

          {/* STACKED PHOTO CARDS */}
          <div
            className={`hero-photo-stack ${
              isAnimating ? 'is-shuffling' : ''
            }`}
          >
            {cardOrder.map((photoIndex, position) => {
              const isFront = position === 0;

              return (
                <button
                  key={photoIndex}
                  type="button"
                  className={`hero-photo-card hero-photo-card--${position + 1} ${
                    isFront ? 'is-front' : 'is-back'
                  }`}
                  onClick={() => handleCardClick(photoIndex)}
                  disabled={!isFront || isAnimating}
                  aria-label={
                    isFront
                      ? 'Klik untuk melihat foto berikutnya'
                      : 'Foto berikutnya'
                  }
                  tabIndex={isFront ? 0 : -1}
                >
                  <span className="hero-photo-card-frame">
                    <img
                      src={photos[photoIndex]}
                      alt={`${profil.nama} - foto ${photoIndex + 1}`}
                      className="hero-photo-card-image"
                      draggable="false"
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* VISUAL INFORMATION */}
          <span className="hero-panel__visual-label">
            PERSONAL PORTFOLIO
          </span>

          <span className="hero-panel__visual-index">
            01 / 03
          </span>

          <div className="hero-panel__visual-note">
            <span>CREATIVE MINDSET</span>
            <strong>Driven by curiosity.</strong>
          </div>

          <span className="hero-visual-dot" />
        </div>

        <div className="hero-visual-shadow" />
      </div>
    </section>
  );
}

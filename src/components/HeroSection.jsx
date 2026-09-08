import './HeroSection.css';

export default function HeroSection({ profil }) {
  return (
    <>
      <section className="hero-panel" id="top">
        <div className="hero-panel__copy">
          <p className="hero-panel__eyebrow">{profil.spesialisasi}</p>
          <div className="hero-panel__title-row">
            <h1 className="hero-panel__title">{profil.nama}<br /><em>builds clarity</em></h1>
          </div>
          <p className="hero-panel__role">{profil.gelar}</p>
          <p className="hero-panel__description">{profil.deskripsi}</p>
          <div className="hero-panel__actions">
            <a className="hero-panel__primary" href="#work">Explore my work <span>↓</span></a>
            <a className="hero-panel__secondary" href={`mailto:${profil.email}`}>Get in touch</a>
          </div>
        </div>

        <div className="hero-panel__visual" aria-label="Information systems introduction">
        </div>
      </section>
    </>
  );
}

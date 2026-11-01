
import './AboutSection.css';
import ScrollReveal from './animations/ScrollReveal';

export default function AboutSection({ pendidikan, pengalaman }) {
  return (
    <section className="about-panel" id="about">

      {/* INTRO */}
      <ScrollReveal animation="slide-left" duration={850}>
        <div className="about-panel__intro">
          <p className="about-panel__eyebrow">02 — Academic Background</p>

          <h2 className="about-panel__title">
            Where knowledge meets
            <br />
            <em>practical exploration.</em>
          </h2>

          <p className="about-panel__summary">
            An academic journey shaped by education, research, and applied learning in information systems and marine science.
          </p>
        </div>
      </ScrollReveal>

      {/* CONTENT */}
      <div className="about-panel__content">

        {/* EDUCATION */}
        <div className="about-panel__block">
          <ScrollReveal animation="fade-up" duration={750}>
            <p className="about-panel__label">Education</p>
          </ScrollReveal>

          <div className="about-panel__education">
            {pendidikan.map((item, index) => (
              <ScrollReveal
                key={item.institusi}
                animation="fade-up"
                delay={index * 120}
                duration={750}
              >
                <article className="about-panel__education-item">
                  <span className="about-panel__period">
                    {item.periode}
                  </span>

                  <h3>{item.institusi}</h3>
                  <p>{item.jurusan}</p>

                  {item.detail && <strong>{item.detail}</strong>}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="about-panel__block">
          <ScrollReveal animation="slide-right" duration={750}>
            <p className="about-panel__label">Experience</p>
          </ScrollReveal>

          <div className="about-panel__experience">
            {pengalaman.map((item, index) => (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={index * 130}
                duration={750}
              >
                <article className="about-panel__experience-item">
                  <span className="about-panel__period">
                    {item.periode}
                  </span>

                  <div>
                    <h3>{item.posisi}</h3>

                    <p className="about-panel__institution">
                      {item.institusi}
                    </p>

                    <p>{item.deskripsi}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

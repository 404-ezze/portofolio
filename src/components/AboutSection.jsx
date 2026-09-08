import './AboutSection.css';

export default function AboutSection({ pendidikan, pengalaman }) {
  return (
    <section className="about-panel" id="about">
      <div className="about-panel__intro">
        <p className="about-panel__eyebrow">02 — About me</p>
        <h2 className="about-panel__title">Grounded in context,<br /><em>curious about systems.</em></h2>
        <p className="about-panel__summary">I like making complex things feel more understandable, useful, and human.</p>
      </div>

      <div className="about-panel__content">
        <div className="about-panel__block">
          <p className="about-panel__label">Education</p>
          <div className="about-panel__education">
            {pendidikan.map((item) => (
              <article className="about-panel__education-item" key={item.institusi}>
                <span className="about-panel__period">{item.periode}</span>
                <h3>{item.institusi}</h3>
                <p>{item.jurusan}</p>
                {item.detail && <strong>{item.detail}</strong>}
              </article>
            ))}
          </div>
        </div>

        <div className="about-panel__block">
          <p className="about-panel__label">Experience</p>
          <div className="about-panel__experience">
            {pengalaman.map((item) => (
              <article className="about-panel__experience-item" key={item.id}>
                <span className="about-panel__period">{item.periode}</span>
                <div>
                  <h3>{item.posisi}</h3>
                  <p className="about-panel__institution">{item.institusi}</p>
                  <p>{item.deskripsi}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

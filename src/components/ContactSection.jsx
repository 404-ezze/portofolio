import React from 'react';
import './ContactSection.css';

const getContactLinks = (profil) => [
  { number: '01', label: 'WhatsApp', value: 'Start a conversation', action: 'Open chat', icon: 'whatsapp', href: 'https://wa.me/6289639468593', external: true },
  { number: '02', label: 'Email', value: 'Send formal inquiries', action: 'Write email', icon: 'gmail', href: `mailto:${profil.email}`, external: false },
  { number: '03', label: 'LinkedIn', value: 'Connect professionally', action: 'Connect', icon: 'linkedin', href: `https://${profil.linkedin}`, external: true },
];

export default function ContactSection({ profil }) {
  const contactLinks = getContactLinks(profil);

  return (
    <section className="contact-panel" id="contact">
      {/* Konten Utama 2 Kolom Seimbang */}
      <div className="contact-panel__body">
        {/* Kolom Kiri */}
        <div className="contact-panel__copy">
          <p className="contact-panel__eyebrow">06 — Contact</p>
          <h2 className="contact-panel__title">Have something<br /><em>in mind?</em></h2>
          <p className="contact-panel__description">
            I am open to discussing system design, data challenges, and thoughtful digital solutions. Send a message and I will get back to you soon.
          </p>
          <div className="contact-panel__meta">
            <span className="contact-panel__availability">
              <span className="availability-dot"></span>
              Open to thoughtful conversations
            </span>
            <span className="contact-panel__location">{profil?.lokasi || 'Jakarta, Indonesia'}</span>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="contact-panel__links">
          {contactLinks.map((contact) => (
            <a 
              className={`contact-panel__link contact-panel__link--${contact.label.toLowerCase()}`} 
              href={contact.href} 
              target={contact.external ? '_blank' : undefined} 
              rel={contact.external ? 'noreferrer' : undefined} 
              key={contact.number}
            >
              <span className="contact-panel__number">{contact.number}</span>
              <span className="contact-panel__icon">
                <img src={`https://cdn.simpleicons.org/${contact.icon}`} alt={`${contact.label} icon`} />
              </span>
              <span className="contact-panel__content">
                <span className="contact-panel__label">{contact.label}</span>
                <strong className="contact-panel__value">{contact.value}</strong>
              </span>
              <span className="contact-panel__action">
                {contact.action}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Seamless Terpusat di Bawah */}
      <footer className="contact-seamless-footer">
        <span>© {new Date().getFullYear()} Dinda Jelita. All rights reserved.</span>
      </footer>
    </section>
  );
}
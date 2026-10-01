// src/pages/Home.jsx
import React from 'react';
import { dataPortofolio } from '../data/dataPortofolio';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import Publications from '../components/Publications'; 
import Certifications from '../components/Certifications';
import './Home.css';

export default function Home() {
  const { profil, proyek, pengalaman, pendidikan, keahlian, analisis, nonTeknis, karya, sertifikasi } = dataPortofolio;

  return (
    <div className="project-detail-page">
      <Navbar />
      
      <main id="top">
        <HeroSection profil={profil} />
        <ProjectSection proyek={proyek} />
        <AboutSection pendidikan={pendidikan} pengalaman={pengalaman} />
        <SkillSection keahlian={keahlian} analisis={analisis} nonTeknis={nonTeknis} />
        <Publications karya={karya} />
        <Certifications sertifikasi={sertifikasi} />
        <ContactSection profil={profil} />
      </main>
    </div>
  );
}
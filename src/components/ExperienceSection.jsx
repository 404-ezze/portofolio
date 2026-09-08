// src/components/ExperienceSection.jsx
import React from 'react';

export default function ExperienceSection({ pengalaman }) {
  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-16 text-center">
        Pengalaman Profesional
      </h3>
      <div className="space-y-12">
        {pengalaman.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-gray-200 pb-12 last:border-0">
            <div className="md:w-1/3 flex-shrink-0">
              <p className="text-[#86868b] font-semibold">{item.periode}</p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-2xl font-bold text-[#1d1d1f] mb-1">{item.posisi}</h4>
              <h5 className="text-lg text-[#1d1d1f] font-medium mb-4">{item.institusi}</h5>
              <p className="text-[#86868b] leading-relaxed">
                {item.deskripsi}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
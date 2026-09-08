import React from 'react';

const Profil = ({ data }) => {
  return (
    <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
      {/* Label Badge Animasi */}
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-300 cursor-default">
        {data.spesialisasi}
      </div>
      
      {/* Tipografi Utama ala Apple */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-tight">
        {data.nama}
      </h1>
      
      <h2 className="text-xl md:text-2xl text-gray-500 font-medium tracking-tight mb-8">
        {data.gelar}
      </h2>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
        {data.deskripsi}
      </p>
    </section>
  );
};

export default Profil;
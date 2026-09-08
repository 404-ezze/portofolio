import React from 'react';

const Proyek = ({ data }) => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="proyek">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Proyek Strategis & Pengembangan Sistem
        </h3>
        <p className="text-gray-500">Rekayasa perangkat lunak dan arsitektur digital.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {item.teknologi.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-lg border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <h4 className="text-2xl font-bold tracking-tight text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {item.judul}
            </h4>
            <p className="text-gray-600 leading-relaxed font-light">
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyek;
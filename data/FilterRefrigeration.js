import React from 'react';

const FilterBoxRefrigeracion = () => {
  return (
    <div
      className="font-poppins filter-box border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg bg-white"
      style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
    >
      <h2 className="text-base md:text-lg font-semibold mb-4">Filtrar por</h2> {/* Cambiado de text-lg a text-base en móviles */}
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Marca</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> LG (8)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Samsung (13)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Whirlpool (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Bosch (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Tipo</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Refrigerador (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Congelador (10)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Mini Refrigerador (7)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Vitrina Refrigerada (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Capacidad</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 200 - 300 L (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 300 - 400 L (10)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 400 - 500 L (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 500 - 600 L (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Precio</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $500.000 - $1.000.000 (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $1.000.000 - $2.000.000 (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $2.000.000 - $3.000.000 (6)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $3.000.000 - $5.000.000 (5)</label> {/* Añadido text-xs en móviles */}
      </div>
    </div>
  );
};

export default FilterBoxRefrigeracion;
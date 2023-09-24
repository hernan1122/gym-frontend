import React from 'react';

function DataCard({name, image}) {
  return (
    <div className='border-color p-5 pt-3 border-b'>
      <h2 className='mb-2 text-white text-lg'>{name}</h2>
      <img className='w-full rounded-lg' src={image} alt="Imagen de ejercicio" />
    </div>
  );
}

export default DataCard;

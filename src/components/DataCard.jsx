import React, { useState } from 'react';

function DataCard({ name, image }) {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded)
  }

  const imageSizeClassName = isImageExpanded ? 'w-screen' : 'w-full rounded-lg'

  return (
    <div
      className='border-color p-5 pt-3 border-b'
      onClick={toggleImageSize}
    >
      <h2 className='mb-2 text-white text-lg'>{name}</h2>
      <div className={`${isImageExpanded && 'w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-black z-50'}`}>
        <img className={imageSizeClassName} src={image} alt="Imagen de ejercicio" />
      </div>
    </div>
  );
}

export default DataCard;

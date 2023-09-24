import React from 'react';
import '../index.css'

// icons
import logoApp from '../images/atleta.png'

function Header() {
  const textStyle = {
    WebkitTextStroke: '1.2px black',
    color: 'transparent'
  }

  return (
    <>
      <div className='w-full h-32 absolute top-28 bg-yellow-500'></div>
      <div className='w-40 h-40 absolute top-24 left-12 rounded-lg transform rotate-45 bg-yellow-600'></div>
      <img className='logo-app w-28 absolute' src={logoApp} alt="Logo de la app" />
      <div className='title-app mb-32 ml-40 flex flex-col items-end z-10'>
        <h2 className='text-2xl text-black font-bold'>Seamos</h2>
        <h2 style={textStyle} className='text-4xl  text-white font-semibold'>FITNESS</h2>
      </div>
    </>
  );
}

export default Header;

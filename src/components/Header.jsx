import React from 'react';

// icons
import logoApp from '../images/atleta.png'

function Header() {
  const textStyle = {
    WebkitTextStroke: '1.2px black',
    color: 'transparent'
  }

  return (
    <>
      <div className='skewed bg-yellow-500'></div>
      <div className='background-logo w-28 h-28 absolute left-12 border-2 border-yellow-500 rounded-lg transform rotate-45 bg-black'></div>
      <img className='logo-app w-20 absolute' src={logoApp} alt="Logo de la app" />
      <div className='title-app w-full pr-8 flex flex-col items-end z-10'>
        <h2 className='text-2xl text-black font-bold'>Seamos</h2>
        <h2 style={textStyle} className='text-4xl text-white font-semibold'>FITNESS</h2>
      </div>
    </>
  );
}

export default Header;


/* return (
    <>
      <div className='w-full h-32 absolute top-28 bg-yellow-500'></div>
      <div className='w-40 h-40 absolute top-24 left-16 rounded-lg transform rotate-45 bg-yellow-600'></div>
      <img className='logo-app w-28 absolute' src={logoApp} alt="Logo de la app" />
      <div className='title-app mb-32 ml-44 flex flex-col items-end z-10'>
        <h2 className='text-2xl text-black font-bold'>Seamos</h2>
        <h2 style={textStyle} className='text-4xl  text-white font-semibold'>FITNESS</h2>
      </div>
    </>
  ); */
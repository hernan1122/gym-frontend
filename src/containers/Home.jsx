import React from 'react';
import InitialButtons from '../components/InitialButtons';

// icons
import logoApp1 from '../images/estacion-de-gimnasio.png'

function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div className='w-40 h-40 absolute top-14 rounded-lg transform rotate-45 bg-yellow-500'></div>
      <div className='w-full mt-28 mb-32 relative flex justify-center items-center'>
        <h1 className='text-4xl text-white font-semibold z-10'>AppGym</h1>
        <img className='w-28 absolute' src={logoApp1} alt="Logo de la app" />
      </div>
      <InitialButtons />
    </div>
  );
}

export default Home;

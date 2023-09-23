import React from 'react';
import InitialButtons from '../components/InitialButtons';
import '../index.css'

// icons
import logoApp1 from '../images/estacion-de-gimnasio.png'
import Phrases from '../components/Phrases';

function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div className='w-full h-32 absolute top-28 bg-yellow-600'></div>
      <div className='w-40 h-40 absolute top-24 rounded-lg transform rotate-45 bg-yellow-500'></div>
      <div className='home-title w-full mb-40 flex justify-center items-center'>
        <h1 className='text-4xl text-white font-semibold z-10'>AppGym</h1>
        <img className='w-28 absolute' src={logoApp1} alt="Logo de la app" />
      </div>
      <InitialButtons />
    </div>
  );
}

export default Home;

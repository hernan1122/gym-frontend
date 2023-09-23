import React from 'react';
import Header from '../components/Header';
import InitialButtons from '../components/InitialButtons';
import '../index.css'

function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Header />
      <InitialButtons />
    </div>
  );
}

export default Home;

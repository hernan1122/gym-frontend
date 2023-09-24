import React, { useState, useEffect } from 'react';

// icons
import logoApp1 from '../images/atleta.png'
import logoApp2 from '../images/levantador-de-pesas.png'
import logoApp3 from '../images/levantamiento-de-pesas.png'
import logoApp4 from '../images/fuerte.png'
import logoApp5 from '../images/ejercicio.png'
import logoApp6 from '../images/gimnasta.png'
import logoApp7 from '../images/condicion-fisica-femenina.png'
import logoApp8 from '../images/gimnasio.png'
import logoApp9 from '../images/ejercicio-1.png'
import logoApp10 from '../images/pose.png'
import logoApp11 from '../images/atleta-1.png'
import logoApp12 from '../images/levantar.png'
import logoApp13 from '../images/ejercicio-2.png'

function Header() {
  const [currentLogo, setCurrentLogo] = useState(logoApp1)

  useEffect(() => {
    const changeLogo = () => {
      const logos = [logoApp1, logoApp2, logoApp3, logoApp4, logoApp5, logoApp6, logoApp7, logoApp8, logoApp9, logoApp10, logoApp11, logoApp12, logoApp13]
      const nextIndex = (logos.indexOf(currentLogo) + 1) % logos.length
      setCurrentLogo(logos[nextIndex])
    }

    const intervalId = setInterval(changeLogo, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [currentLogo])

  const textStyle = {
    WebkitTextStroke: '1.2px black',
    color: 'transparent'
  }

  return (
    <>
      <div className='skewed bg-yellow-500'></div>
      <div className='background-logo w-28 h-28 absolute left-12 border-2 border-yellow-500 rounded-lg transform rotate-45 opacity-40 bg-black'></div>
      <img className='logo-app w-20 absolute' src={currentLogo} alt="Logo de la app" />
      <div className='title-app w-full pr-8 flex flex-col items-end z-10'>
        <h2 className='text-2xl font-bold'>Seamos</h2>
        <h2 style={textStyle} className='text-4xl text-white font-semibold'>FITNESS</h2>
      </div>
    </>
  );
}

export default Header;

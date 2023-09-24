import React from 'react';
import { Link } from 'react-router-dom';

function Button({children, to}) {
  return (
    <Link to={to} className='w-64 h-12 text-lg text-black font-bold flex justify-center items-center rounded-lg bg-yellow-500 transition-all duration-300'>
      <h2>{children}</h2>
    </Link>
  );
}

export default Button;

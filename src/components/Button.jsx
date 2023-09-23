import React from 'react';

function Button({children}) {
  return (
    <button className='w-64 h-12 text-lg text-black font-bold rounded-lg bg-yellow-500 transition-all duration-300'>
      {children}
    </button>
  );
}

export default Button;

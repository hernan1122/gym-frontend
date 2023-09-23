import React from 'react';

function Button({children}) {
  return (
    <button className='w-36 h-12 text-black font-bold rounded-lg bg-yellow-400 transition-all duration-300'>
      {children}
    </button>
  );
}

export default Button;

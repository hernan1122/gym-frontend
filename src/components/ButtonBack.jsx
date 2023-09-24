import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function ButtonBack() {
  return (
    <Link to={'/'} className='flex justify-center items-center'>
      <div className='w-7 h-7 absolute border border-black rounded-md transform rotate-45'></div>
      <ArrowUturnLeftIcon className='w-5 h-5' />
    </Link>
  );
}

export default ButtonBack;

import React from 'react';
import ButtonBack from './ButtonBack';

function HeaderItems({nameBorder, nameSolid}) {
  const textStyle = {
    WebkitTextStroke: '1px black',
    color: 'transparent'
  }

  return (
    <div className='w-full h-14 px-5 fixed flex justify-between items-center bg-yellow-500'>
      <div className='flex'>
        <h3 style={textStyle} className='text-2xl text-back font-semibold'>{nameBorder}</h3>
        <h3 className='text-2xl text-back font-semibold'>{nameSolid}</h3>
      </div>
      <ButtonBack />
    </div>
  );
}

export default HeaderItems;

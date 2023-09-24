import React from 'react';
import data_back from '../contants/back.js'

function Back() {
  const textStyle = {
    WebkitTextStroke: '1px black',
    color: 'transparent'
  }

  return (
    <div className='py-5'>
      <div className='w-full h-14 pl-5 flex items-center bg-yellow-600'>
        <h3 style={textStyle} className='text-2xl text-back font-semibold'>Es</h3>
        <h3 className='text-2xl text-back font-semibold'>palda</h3>
      </div>
      {data_back.map((back, index) => {
        return (
          <div key={index} className='p-5 border-b border-gray-700'>
            <h2 className='mb-2 text-white text-lg'>{back.name}</h2>
            <img className='w-full rounded-lg' src={back.image} alt="" />
          </div>
        )
      })}
    </div>
  );
}

export default Back;

import React from 'react';
import Button from './Button';

function InitialButtons() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='grid grid-cols-1 gap-4'>
        <Button children='Espalda' />
        <Button children='Pecho' />
        <Button children='Biceps' />
        <Button children='Triceps' />
        <Button children='Hombros' />
        <Button children='Piernas' />
      </div>
    </div>
  );
}

export default InitialButtons;

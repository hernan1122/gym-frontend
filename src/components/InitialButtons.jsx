import React from 'react';
import Button from './Button';

function InitialButtons() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='grid grid-cols-1 gap-4'>
        <Button to={'/back'} children='Espalda' />
        <Button to={'/chest'} children='Pecho' />
        <Button to={'/biceps'} children='Biceps' />
        <Button to={'/triceps'} children='Triceps' />
        <Button to={'/shoulders'} children='Hombros' />
        <Button to={'/legs'} children='Piernas' />
      </div>
    </div>
  );
}

export default InitialButtons;

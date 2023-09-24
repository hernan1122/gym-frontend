import React from 'react';
import data_back from '../contants/back'
import HeaderItems from '../components/HeaderItems.jsx';
import DataCard from '../components/DataCard.jsx';

function Back() {
  return (
    <div className='pt-5'>
      <HeaderItems
        nameBorder='Es'
        nameSolid='palda'
      />
      <div className='mt-14'>
        {data_back.map((back, index) => {
          return (
            <DataCard 
              key={index}
              name={back.name}
              image={back.image}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Back;

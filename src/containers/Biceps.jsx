import React from 'react';
import data_biceps from '../contants/biceps'
import HeaderItems from '../components/HeaderItems.jsx';
import DataCard from '../components/DataCard.jsx';

function Biceps() {
  return (
    <div className='pt-5'>
      <HeaderItems
        nameBorder='Bi'
        nameSolid='ceps'
      />
      <div className='mt-14'>
        {data_biceps.map((biceps, index) => {
          return (
            <DataCard 
              key={index}
              name={biceps.name}
              image={biceps.image}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Biceps;

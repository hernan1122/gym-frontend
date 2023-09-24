import React from 'react';
import data_triceps from '../contants/triceps'
import HeaderItems from '../components/HeaderItems.jsx';
import DataCard from '../components/DataCard.jsx';

function Triceps() {
  return (
    <div className='pt-5'>
      <HeaderItems
        nameBorder='Tr'
        nameSolid='iceps'
      />
      <div className='mt-14'>
        {data_triceps.map((triceps, index) => {
          return (
            <DataCard 
              key={index}
              name={triceps.name}
              image={triceps.image}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Triceps;

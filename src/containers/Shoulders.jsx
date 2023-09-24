import React from 'react';
import data_shoulders from '../contants/shoulders'
import HeaderItems from '../components/HeaderItems.jsx';
import DataCard from '../components/DataCard.jsx';

function Shoulders() {
  return (
    <div className='pt-5'>
      <HeaderItems
        nameBorder='Ho'
        nameSolid='mbros'
      />
      <div className='mt-14'>
        {data_shoulders.map((shoulders, index) => {
          return (
            <DataCard 
              key={index}
              name={shoulders.name}
              image={shoulders.image}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Shoulders;

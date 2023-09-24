import React from 'react';
import data_legs from '../contants/legs'
import HeaderItems from '../components/HeaderItems.jsx';
import DataCard from '../components/DataCard.jsx';

function Legs() {
  return (
    <div className='pt-5'>
      <HeaderItems
        nameBorder='Pi'
        nameSolid='ernas'
      />
      <div className='mt-14'>
        {data_legs.map((legs, index) => {
          return (
            <DataCard 
              key={index}
              name={legs.name}
              image={legs.image}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Legs;

import React from 'react';
import data_chest from '../contants/chest'
import HeaderItems from '../components/HeaderItems.jsx';
import DataCard from '../components/DataCard.jsx';

function Chest() {
  return (
    <div className='pt-5'>
      <HeaderItems
        nameBorder='Pe'
        nameSolid='cho'
      />
      <div className='mt-14'>
        {data_chest.map((chest, index) => {
          return (
            <DataCard 
              key={index}
              name={chest.name}
              image={chest.image}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Chest;

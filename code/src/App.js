import React from 'react';
import data from './data.json';
import Albumshero from './components/Albumshero';
import MainWrapper from 'components/MainWrapper';

console.log(data);

export const App = () => {
  return (    
   <>
    <MainWrapper />

      {data.albums.items.map(item => {
        return <Albumshero key={item.id} data= {item} />
      })}  

</>
  );
}



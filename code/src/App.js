import React from 'react';
import data from './data.json';
import Albumshero from './components/Albumshero';

console.log(data);

export const App = () => {
  return (    
    <>
      {data.albums.items.map(item => {
        return <Albumshero key={item.id} data= {item} />
      })}        
    </>
  );
}



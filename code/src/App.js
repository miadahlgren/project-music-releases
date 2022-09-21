import React from 'react';
import data from './data.json';
import Albumshero from './components/Albumshero';
import Header from 'components/Header';

console.log(data);

export const App = () => {
  return (    
   <>
   
    <Header />
    <section class="section">
      {data.albums.items.map(item => {
        return <Albumshero key={item.id} data= {item} />
      })}  
    </section>
</>
  );
}



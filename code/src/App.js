import React from 'react';
import data from './data.json';
import Albumshero from './components/Albumshero';
import Header from 'components/Header';

console.log(data);

export const App = () => {
  return (    
   <>
   <section class="outer-section">
   <section class="section">
   <div class="header">
      <Header />  
    </div>
    
       
      {data.albums.items.map(item => {
        return <Albumshero key={item.id} data= {item} />
        
      })}  
    </section>
    </section>
    
</>
  );
}



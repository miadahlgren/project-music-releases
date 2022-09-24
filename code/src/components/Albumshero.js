import React from 'react';
import Covers from './Covers';
import Album from './Album';
import Artist from './Artist';
import AlbumOverlay from './AlbumOverlay';

const Albumshero = (props) => {
  console.log(props.data);
  return (
    <>
     <div class="musicCard">
     <a class ="album-link" href={props.data.external_urls.spotify} target="_blank" rel="noopener noreferrer">
     <div class="imagewrapper">
        <Covers albumImage = {props.data.images[1].url} />
        <AlbumOverlay />
       </div> 
            <Album albumName = {props.data.name} />
            </a>

                <Artist data = {props.data} /> 
        
        </div>
    </>
    
    );
}

export default Albumshero
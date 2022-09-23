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
        
            <a class="artist-link" href={props.data.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <Artist artistName = {props.data.artists[0].name} />
            </a>
        
        </div>
    </>
    
    );
}

export default Albumshero
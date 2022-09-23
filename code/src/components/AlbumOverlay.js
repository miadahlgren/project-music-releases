import React from 'react';



const AlbumOverlay = (props) => {
  console.log(props);
  return (
    <>
    
    <div class="overlay">
    
     <img class="heart" src = "./icons/heart.svg" />
     <img class="play" src = "./icons/play.svg" />
     <img class="dots" src = "./icons/dots.svg" />
    </div>
    
    </>
    )
}

export default AlbumOverlay
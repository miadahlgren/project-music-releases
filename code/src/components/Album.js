import React from 'react';

const Album = (props) => {
  return (
    <p class="albumNameP">
      {props.albumName}  
    </p>
  );
}

export default Album
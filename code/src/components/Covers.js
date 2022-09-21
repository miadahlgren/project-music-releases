import React from 'react';


const Covers = (props) => {
  console.log(props);
  return (
  
    <img class="coverImg" src = {props.albumImage} />

    )
}

export default Covers
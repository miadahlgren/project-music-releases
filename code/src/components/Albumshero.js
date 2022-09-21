import React from 'react';
import Covers from './Covers';
import Album from './Album';
import Artist from './Artist';

const Albumshero = (props) => {
  console.log(props.data);
  return (
    <>
    <Covers albumImage = {props.data.images[1].url} />
    <Album albumName = {props.data.name} />
    <Artist artistName = {props.data.artists[0].name} />
    </>
    );
}

export default Albumshero
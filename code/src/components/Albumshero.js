import React from 'react';
import Covers from './Covers';
import Artist from './Artist';

const Albumshero = (props) => {
  console.log(props.data);
  return (
    <>
    <Covers artistImage = {props.data.images[1].url} />
    <Artist artistName = {props.data.name} />
    </>
    );
}

export default Albumshero
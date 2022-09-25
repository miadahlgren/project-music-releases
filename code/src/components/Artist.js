import React from 'react';

const Artist = (props) => {
  return (
    <>
    <div className='artistNameDiv'>
        {props.data.artists.map((artist, index) => {
          return (
            <a className="artist-link"
              key={artist.id}
              href={artist.external_urls.spotify}
              target="_blank" rel="noopener noreferrer">

               
                  {artist.name}{props.data.artists.length - 1> index ? ', ' : ''}
              
            </a>
          )
        })
        }
        </div>
    </>
  );
}

export default Artist
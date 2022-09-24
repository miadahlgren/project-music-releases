import React from 'react';

const Artist = (props) => {
  return (
    <>
        {props.data.artists.map((artist, index) => {
          return (
            <a className="artist-link"
              key={artist.id}
              href={artist.external_urls.spotify}
              target="_blank">

                <p className='artistNameP'>
                  {artist.name}
                  {props.data.artists.length - 1 > index ? ', ' : ''}
                </p>
            </a>
          )
        })
        }
    </>
  );
}

export default Artist
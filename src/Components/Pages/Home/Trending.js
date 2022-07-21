import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

// Songs Function
const Trending = () => {
const [data, setData] = useState([]);

  // Songs
  const getSongs = () => {
      axios.get("http://localhost:4000/songs/readSongs")
          .then((response) => {
              setData(response.data);
              console.log(response.data)
          });
  };

  useEffect(() => {
      getSongs()
  }, [])

  // Deconstructing Data Object
  const {id, songTitle, albumTitle, albumArt, artist, genre, length} = data[0] || {};

  // Page Display
  return (
      <>
        <h1>Album of the Day: {albumTitle}</h1>

        <h2>Artist: {artist}</h2>

        {data.map(({id, songTitle, albumTitle, albumArt, artist, genre, length}) =>
          <div key={id} id={id} className='card'>
              <p>{id}: {songTitle}</p>
          </div>
        )}
      </>
  )

}

export default Trending
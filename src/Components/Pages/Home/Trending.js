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

  // Deconstructing Data Object - Currently Unnecessary
  const {id, title} = data;

  useEffect(() => {
      getSongs()
  }, [])

  // Page Display
  // --- Mongo Database needs to be changed into a master collection of songs which have artists and albums attributed to them
  return (
      <>
        {data.map(({id, title}) =>
          <div key={id} id={id} className='card'>
              <p>{id} {title}</p> 
          </div>
        )}
      </>
  )

}

export default Trending
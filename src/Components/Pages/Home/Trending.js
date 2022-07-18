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

  // Deconstructing Data Object
  const {id, title} = data;

  useEffect(() => {
      getSongs()
  }, [])

  // Page Display
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
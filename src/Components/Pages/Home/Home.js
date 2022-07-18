import React from 'react';
import '../Home/HomeStyles.css'
import Banner from './Banner'
import Trending from './Trending';

const Home = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='container-lg'>
        
            <div className='container' id='header'>
                <Banner />
            </div>

            <div className='container'>
                <Trending />
            </div>

        </div>
    </div>
    </>
  )
}

export default Home;
import React from 'react';
import '../Home/HomeStyles.css'
import Banner from './Banner'
import Content from './Content';
import Trending from './Trending';

const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container-lg'>

          <div className='container' id='mainBody'>
            <div className='container'>
              <Banner />
              <Content />
            </div>

            <div className='container'>
              <Trending />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;
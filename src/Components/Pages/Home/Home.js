import React from 'react';
import '../Home/HomeStyles.css'
import Banner from './Banner'
import Trending from './Trending';

const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container-lg'>

          <div className='container' id='mainBody'>
            <div className='container'>
              <Banner />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
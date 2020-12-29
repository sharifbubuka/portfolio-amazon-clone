import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='banner__image'
          src={`${process.env.PUBLIC_URL}/homepage-banner.jpg`}
          alt='homepage banner'
        />

          <div className='home__row'>
            <Product />
            <Product />
          </div>

          <div className='home__row'>

          </div>
          <div className='home__row'>

          </div>
      </div>
    </div>
  )
}

export default Home

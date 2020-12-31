import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='banner__image'
          src={`${process.env.PUBLIC_URL}images/homepage-banner.jpg`}
          alt='homepage banner'
        />

          <div className='home__row'>
            <Product
              id='001' 
              image={`${process.env.PUBLIC_URL}images/Beats by Dre headsets.jpg`}
              name='Beats by Dre headsets'
              description='Headphones with Microphone/Deep Bass Wireless Headphones Over Ear 30H Playtime for Travel/Work/TV/Computer/Cellphone - Black'
              price='54.99'
              rating={5}/>
            <Product
              id='002' 
              image={`${process.env.PUBLIC_URL}images/computer-monitor.jpg`}
              name='Computer Monitor'
              description='IPS, 4ms, AMD FreeSync, Ultrathin Bezel, Built-in Speakers, 2x HDMI, 3 Year Warranty,
              Platinum'
              price='364'
              rating={3}/>
          </div>

          <div className='home__row'>
            <Product
              id='003' 
              image={`${process.env.PUBLIC_URL}images/Acer Aspire 5 laptop.jpg`}
              name='Acer Aspire 5 laptop'
              description='15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
              price='25'
              rating={4}/>
            <Product
              id='004' 
              image={`${process.env.PUBLIC_URL}images/Nintendo Switch Pro controller.jpg`}
              name='Nintendo Switch Pro controller'
              description='Wireless Controller for N-Switch/Switch Lite, RegeMoudal Switch Pro Controller with DIY Color Wake Up Function,Built-in 500mAh Recharger Battery Gamepad Joypad Remote Joystick'
              price='32.99'
              rating={1}/>
            <Product
              id='005' 
              image={`${process.env.PUBLIC_URL}images/Seagate Portable 2TB Hard Drive.jpg`}
              name='Seagate Portable 2TB Hard Drive'
              description='Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-year Rescue Service (STGX2000400)'
              price='62.99'
              rating={3}/>
          </div>
          <div className='home__row'>
            <Product
              id='006' 
              image={`${process.env.PUBLIC_URL}images/Samsung ultra wide monitor.jpg`}
              name='Samsung ultra wide monitor'
              description='SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White'
              price='137'
              rating={649.99}/>
          </div>
      </div>
    </div>
  )
}

export default React.memo(Home)

import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      {/* Image */}
      {/* searchbar */}
      {/* Children */}
      <img
        className='header__logo'
        src={`${process.env.PUBLIC_URL}/amazon-logo.png`} 
        alt='logo'
      />

      <div className='header__search'>
        <input
          className='header__searchInput'
          type='text'
        />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <img 
            className='header__optionFlag'
            src={`${process.env.PUBLIC_URL}/uganda-flag.png`}
            alt='uganda flag'
          />
          <ExpandMoreIcon fontSize='small' className='downCaret' />
        </div>

        <div className='header__option'>
           <span className='header__optionLineOne'>Hello Guest</span>
           <span className='header__optionLineTwo'>
             Sign in <ExpandMoreIcon fontSize='small' className='downCaret' />
          </span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>

        <div className='header__optionBasket'>
          <ShoppingCartIcon />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header

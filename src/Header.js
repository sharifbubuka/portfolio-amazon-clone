import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useStateValue } from './StateProvider'
import './Header.css'

function Header() {
  const [ state ] = useStateValue()
  const { basket } = state

  return (
    <div className='header'>
      {/* Image */}
      {/* searchbar */}
      {/* Children */}
      <Link to='/'>
        <img
          className='header__logo'
          src={`${process.env.PUBLIC_URL}images/amazon-logo.png`} 
          alt='logo'
        />
      </Link>

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
            src={`${process.env.PUBLIC_URL}images/uganda-flag.png`}
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

        <Link to='checkout'>
          <div className='header__optionBasket'>
            <ShoppingCartIcon />
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import Rating from 'material-ui-rating'
import { useStateValue } from './StateProvider'
import './CheckoutProduct.css'


function CheckoutProduct({ id, image, name, description, price, rating }) {
  const [{basket}, dispatch] = useStateValue()

  const removeFromBasket= () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
    <div className='checkoutProduct'>
      <img
        className='checkoutProduct__image' 
        src={image}
        alt={name}
      />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__description'>
          <strong className='checkoutProduct__name'>{name}</strong>
          {description}
        </p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          <Rating
            className='rating'
            value={rating}
            max={5}
            readOnly
          />
        </div>
        <button 
          className='amazon__button'
          onClick={removeFromBasket}>
            Remove from basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct

import React from 'react'
import Rating from 'material-ui-rating'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__name'>Computer Monitor</p>
        <p className='product__price'>
          <small>$</small>
          <strong>24.99</strong>
        </p>
        <div className='product__rating'>
          <Rating
            className='rating'
            value={3}
            max={5}
            onChange={(i) => console.log('onChange ' + i)}
            readOnly
          />
        </div>
      </div>

      <img
      src={`${process.env.PUBLIC_URL}/computer-monitor.jpg`}
      alt='computer monitor'
      />

      <button className='addtocart__button'>Add to Basket</button>
    </div>
  )
}

export default Product

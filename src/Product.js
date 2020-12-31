import React from 'react'
import Rating from 'material-ui-rating'
import { useStateValue } from './StateProvider'
import './Product.css'

function Product({id, name, description, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue()
  console.log('This is the basket >>>', basket);

  const addToBasket = () => {
    // dispatch item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        name: name,
        description: description,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__description'><span className='product__name'>{name}</span><br />
         {description}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          <Rating
            className='rating'
            value={rating}
            max={5}
            readOnly
          />
        </div>
      </div>

      <img
      src={image}
      alt={name}
      />

      <button 
        className='amazon__button addtocart__button'
        onClick={addToBasket} // prevent rerender of all components on child click
      >Add to Basket</button>
    </div>
  )
}

export default React.memo(Product)

// Stopped at 3:22:29 / 8:43:33 
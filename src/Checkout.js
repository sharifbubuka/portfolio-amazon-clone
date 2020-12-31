import React from 'react'
import Subtotal from './SubTotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'


function Checkout() {
  const [{basket }] = useStateValue()
  

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src={`${process.env.PUBLIC_URL}images/amazon ad.jpg`}
          alt='Exclusive offer for amazon customers'
        />
        <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>
          {
            basket.map((item, idx) => (
              <CheckoutProduct
                key={idx}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
                description={item.description}
              ></CheckoutProduct>
            ))
          }
        </div>
      </div>

      
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout

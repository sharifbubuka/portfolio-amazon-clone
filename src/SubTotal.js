import React from 'react'
import CurrenyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import './SubTotal.css'

function SubTotal() {
  const [ state ] = useStateValue()
  const { basket } = state
  console.log(basket);



  return (
    <div className='subtotal'>
      <CurrenyFormat
        renderText={(value) => (
          <>
              <p>
              Subtotal ({basket.length} items):
              <strong>
                {value}
              </strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> 
              The order conatins a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType='text'
        thousandSeparator={true}
        prefix={'$'}
      />

      <button className='amazon__button proceedToCheckout__button'>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal

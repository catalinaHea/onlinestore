import React, { useContext, useState } from 'react'
import {PRODUCTS} from "../../products"
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './Cart-item'
import "../cart/cart.css"
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const naviagte = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items </h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=> {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
        })}
      </div>
        { totalAmount > 0 ?
        <div className='checkout'>
          <p>
            Subtotal: $ {totalAmount}
          </p>
            <button onClick={()=> naviagte("/")}>Continue</button>
            <button>Checkout</button>
        </div>
        : <h1>Your Cart Is Empty</h1>}

    </div>
  )
}

import React, { useContext, useState } from 'react'
import "../shop/shop.css"

import { FaRegTrashAlt } from "react-icons/fa";

import {ShopContext} from "../../context/shop-context"
 
export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;

  const [itemCount, setItemCount] = useState(0)

  const {addToCart, cartItems, removeFromCart} = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
      <div>
      <img src={productImage} />
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          ${price}
        </p>
      </div>
      <div className='prodbuttons'>
        <button className="addToCartBttn" onClick={() => addToCart(id)}  >
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button> 
        { cartItemAmount > 0 && (
          <button className='removeCartBtn' onClick={() => removeFromCart(id)}>
            <FaRegTrashAlt /> {cartItemAmount < 0 && <>({cartItemAmount})</>}
          </button>
      )
      }
      </div>
    </div>
  )
}

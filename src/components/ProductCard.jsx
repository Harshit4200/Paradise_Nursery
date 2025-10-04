import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductCard({ product, onAdd }) {
  // Access cart items from Redux
  const cartItems = useSelector(state => state.cart.items)

  // Check if this product is already in the cart and has qty > 0
  const isInCart = cartItems[product.id]?.qty > 0

  return (
    <div className='product-card'>
      <img src={product.img} alt={product.name} className='thumb'/>
      <div className='meta'>
        <h3>{product.name}</h3>
        <p className='price'>${product.price.toFixed(2)}</p>
        <button 
          className='btn' 
          onClick={onAdd} 
          disabled={isInCart} // disable if already in cart
        >
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

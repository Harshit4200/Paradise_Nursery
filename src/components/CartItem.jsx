import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeItem } from '../features/cartSlice'


export default function CartItem({ product, qty }) {
const dispatch = useDispatch()


return (
<div className='cart-item'>
<img src={product.img} alt={product.name} className='thumb'/>
<div className='info'>
<h4>{product.name}</h4>
<p>Unit: ${product.price.toFixed(2)}</p>
<p>Total: ${(product.price * qty).toFixed(2)}</p>
</div>
<div className='controls'>
<button onClick={() => dispatch(decreaseQty(product.id))}>-</button>
<span>{qty}</span>
<button onClick={() => dispatch(increaseQty(product.id))}>+</button>
<button className='delete' onClick={() => dispatch(removeItem(product.id))}>Delete</button>
</div>
</div>
)
}
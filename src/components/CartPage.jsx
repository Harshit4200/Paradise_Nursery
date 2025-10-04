import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../features/cartSlice'
import { Link } from 'react-router-dom'


export default function CartPage() {
const itemsObj = useSelector(state => state.cart.items)
const items = Object.values(itemsObj)
const dispatch = useDispatch()


const totalItems = items.reduce((sum, it) => sum + it.qty, 0)
const totalCost = items.reduce((sum, it) => sum + it.qty * it.product.price, 0)


return (
<section className='cart container'>
<h2>Your Shopping Cart</h2>
<p>Total plants: <strong>{totalItems}</strong></p>
<div className='cart-grid'>
<div className='cart-items'>
{items.length === 0 ? (
<p>Your cart is empty. <Link to='/products'>Continue shopping</Link>.</p>
) : (
items.map(({ product, qty }) => (
<CartItem key={product.id} product={product} qty={qty} />
))
)}
</div>
<aside className='cart-summary'>
<h3>Order Summary</h3>
<p>Items: {totalItems}</p>
<p>Total: ${totalCost.toFixed(2)}</p>
<div className='actions'>
<Link to='/products' className='btn'>Continue Shopping</Link>
{items.length > 0 && <button className='btn primary' onClick={() => { alert('Coming Soon'); dispatch(clearCart()) }}>Checkout</button>}
</div>
</aside>
</div>
</section>
)
}
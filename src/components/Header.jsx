import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(){
  const items = useSelector(state => state.cart.items)
  const totalCount = Object.values(items).reduce((acc,it)=>acc+it.qty,0)
  const location = useLocation()
  return (
    <header className='header'>
      <div className='container header-inner'>
        <Link to='/' className='logo'>Paradise Nursery</Link>
        <nav>
          {location.pathname!=='/products' && <Link to='/products'>Products</Link>}
          {location.pathname!=='/cart' && <Link to='/cart'>Cart</Link>}
        </nav>
        <Link to='/cart' className='cart-icon'>🛒<span className='cart-count'>{totalCount}</span></Link>
      </div>
    </header>
  )
}
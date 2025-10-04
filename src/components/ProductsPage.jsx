import React,{useMemo,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'
import ProductCard from './ProductCard'

export default function ProductsPage(){
  const products = useSelector(s=>s.products.items)
  const dispatch = useDispatch()
  const categories = useMemo(()=>[...new Set(products.map(p=>p.category))], [products])
  const [selectedCategory,setSelectedCategory]=useState('All')
  const filtered = products.filter(p=>selectedCategory==='All'?true:p.category===selectedCategory)
  return (
    <section className='products container'>
      <h2>Our Plants</h2>
      <div className='filters'>
        <button className={selectedCategory==='All'?'active':''} onClick={()=>setSelectedCategory('All')}>All</button>
        {categories.map(cat=><button key={cat} className={selectedCategory===cat?'active':''} onClick={()=>setSelectedCategory(cat)}>{cat}</button>)}
      </div>
      <div className='grid'>{filtered.map(p=><ProductCard key={p.id} product={p} onAdd={()=>dispatch(addToCart(p))}/> )}</div>
    </section>
  )
}
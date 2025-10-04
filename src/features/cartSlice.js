import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: {} }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      if (state.items[product.id]) state.items[product.id].qty += 1
      else state.items[product.id] = { product, qty: 1 }
    },
    increaseQty: (state, action) => { if(state.items[action.payload]) state.items[action.payload].qty +=1 },
    decreaseQty: (state, action) => {
      if(!state.items[action.payload]) return
      if(state.items[action.payload].qty >1) state.items[action.payload].qty -=1
      else delete state.items[action.payload]
    },
    removeItem: (state, action) => { delete state.items[action.payload] },
    clearCart: state => { state.items = {} }
  }
})

export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
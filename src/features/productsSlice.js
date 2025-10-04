import { createSlice } from '@reduxjs/toolkit'
import PRODUCTS from '../data/ products'

export default createSlice({
  name: 'products',
  initialState: { items: PRODUCTS },
  reducers: {}
}).reducer
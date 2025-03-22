import { createSlice } from '@reduxjs/toolkit'
import { ProductsState } from '../interfaces';

const initialState: ProductsState[] = []

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
        state.push(...action.payload);
    }
  },
})

export const { addProducts } = productsSlice.actions

export default productsSlice.reducer
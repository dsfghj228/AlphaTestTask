import { createSlice } from '@reduxjs/toolkit'
import { ProductsState } from '../interfaces';

const initialState: ProductsState[] = []

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
        state.push(...action.payload);
    }, 
    resetState: (state) => {
      state = []
    },
    toggleFavorite(state, action) {
      const product = state.find(product => product.id === action.payload);
      if (product) {
        product.isFavorite = !product.isFavorite;
      }
    },
  },
})

export const { addProducts, resetState, toggleFavorite } = productsSlice.actions

export default productsSlice.reducer
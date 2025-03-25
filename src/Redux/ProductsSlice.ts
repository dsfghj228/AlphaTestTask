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
    removeProduct(state, action) {
      return state.filter(product => product.id !== action.payload);
    },
  },
})

export const { addProducts, resetState, toggleFavorite, removeProduct} = productsSlice.actions

export default productsSlice.reducer
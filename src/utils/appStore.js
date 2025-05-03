import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // you must specify a key and the reducer function
  },
});

export default appStore;

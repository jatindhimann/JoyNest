import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './tools/cart/cartSlice'
import userReducer from './tools/user/userSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
})

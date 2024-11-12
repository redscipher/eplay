import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (gdm) => gdm().concat(api.middleware)
})

type RootReducer = ReturnType<typeof store.getState>

export default store
export type { RootReducer }

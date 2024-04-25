import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Redux/Reducer'

 export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

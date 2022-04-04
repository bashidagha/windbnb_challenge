import { configureStore } from '@reduxjs/toolkit'
import citySlice from './citySlice'

export default configureStore({
  reducer: {
    city: citySlice,
  },
})
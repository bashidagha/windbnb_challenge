import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    value: "Helsinki",
  },
  reducers: {
    changeCity: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeCity } = citySlice.actions

export default citySlice.reducer
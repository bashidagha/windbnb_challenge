import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    value: {name: "Helsinki", filterValue: ""},
  },
  reducers: {
    changeCity: (state, action) => {
      state.value.name = action.payload
    },
    filterCity: (state, action) => {
      state.value.filterValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCity, filterCity } = citySlice.actions

export default citySlice.reducer
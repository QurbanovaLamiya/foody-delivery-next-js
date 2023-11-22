import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: [],
  homeCards: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHome: (state, action) => {
      state.home = action.payload;
    },
    setHomeCards: (state, action) => {
      state.homeCards = action.payload;
    },
  },
});

export const { setHome, setHomeCards } = homeSlice.actions;

export default homeSlice.reducer;

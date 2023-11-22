import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const itemInBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );

      if (itemInBasket) {
        itemInBasket.count++;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
    },

    increment: (state, action) => {
      const item = state.basket.find((item) => item.id === action.payload);
      item.count++;
    },

    decrement: (state, action) => {
      const item = state.basket.find((item) => item.id === action.payload);

      if (item.count === 1) {
        state.basket = state.basket.filter((item) => item.id != action.payload);
      } else {
        item.count--;
      }
    },

    removeBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBasket, increment, decrement, removeBasket } =
  basketSlice.actions;

export default basketSlice.reducer;

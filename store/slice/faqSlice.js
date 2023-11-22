import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faqs: [],
};

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setFaqs: (state, action) => {
      state.faqs = action.payload;
    },
  },
});

export const { setFaqs } = faqSlice.actions;

export default faqSlice.reducer;

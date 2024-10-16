import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;

      // lo que realmente se hace por detrás es:
      // return {
      //   ...state,
      //   counter: state.counter +1
      // }
    },
    decrement: (state) => {
      if (state.counter < 1) {
        return;
      }
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      // el payload puede ser una variable cualquiera (objeto, bool, etc..)
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;

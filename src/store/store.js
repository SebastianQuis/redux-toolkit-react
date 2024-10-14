// TODO - CONFIGURACIÓN DEL STORE

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // todo - poner todos los slices del store.
    counter: counterSlice.reducer,
  },
});

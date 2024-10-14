// TODO - CONFIGURACIÓN DEL STORE

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    // todo - poner todos los slices del store.
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});

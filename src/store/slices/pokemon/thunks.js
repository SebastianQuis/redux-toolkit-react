import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, action) => {
    dispatch(startLoadingPokemons());

    const dataPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    ).then((response) => response.json());

    // todo - peticion http getPokemons - axios

    dispatch(setPokemons({ page: page + 1, pokemons: dataPokemon.results }));
  };
};

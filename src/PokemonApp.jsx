import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";
import reactLogo from "./assets/react.svg";

export const PokemonApp = () => {
  const {
    pokemons = [],
    isLoading,
    page,
  } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  console.log(pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading : {pokemons.isLoading ? "true" : "false"}</span>

      <button
        style={{ marginLeft: "15px" }}
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        {" "}
        Next page
      </button>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

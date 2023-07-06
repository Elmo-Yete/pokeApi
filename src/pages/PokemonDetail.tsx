import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<any>([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [name]);
  console.log(pokemon);
  return (
    <section className="flex flex-col">
      <figure className="flex w-fit justify-center">
        <img
          src={pokemon?.sprites?.other["official-artwork"]?.front_default}
          alt="pokemon"
          className="w-3/6"
        />
      </figure>
      <div>
        <h1 className="font-bold text-2xl ms-10"> {name} </h1>
        <p className="ms-9 w-fit px-2 text-center rounded-lg font-semibold text-lg">
          {" - "}
          {pokemon?.types[0]?.type?.name} {" - "}
        </p>
        <p className="ms-9 w-fit px-2 text-center rounded-lg font-semibold text-lg">
          {" - "}
          {pokemon?.types[1]?.type?.name}
          {" - "}
        </p>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen flex flex-col justify-center items-center text-neutral-100 gap-14">
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemon"
          className="w-80"
        />
      </header>
      <h1 className="text-2xl">Esto es una Pokedex</h1>
      <Link
        to="/pokemon"
        className="bg-red-500 text-neutral-100 rounded-md p-4"
      >
        Ir a la pokedex
      </Link>
    </main>
  );
}

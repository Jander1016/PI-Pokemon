
import Pokemons from "../Components/Pokemons"
import UseApiPokemon from "../helpers/PokemonService";
import { NavBar } from "./NavBar"

const Home =()=> {
    UseApiPokemon()

    return (
        <>
        <NavBar /> 
        <Pokemons />
        </>
    )
}

export default Home
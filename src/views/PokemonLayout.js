import { useEffect } from "react";
import Nav from "../components/Nav/Nav";
import PokemonList from "../components/PokemonList/PokemonList"
import usePokemonsStore from "../stores/pokemon";

export default function PokemonLayout () {
    const { getPokemons, pokemons } = usePokemonsStore(state=>({getPokemons: state.getPokemons, pokemons: state.pokemons }))


    useEffect(()=>{
        getPokemons().catch(null)
    },[])

    return(
        <>
        <Nav/>
        <PokemonList pokemons={pokemons} />
        </>
    )
}
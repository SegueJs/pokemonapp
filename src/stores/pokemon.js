import create from "zustand"
import apiCall from "../api"

const usePokemonsStore = create((set,get)=>({
    getPokemons: async () => {
        try {
            set({ isLoading: true })
            const pokemonsResult = await apiCall({
                url: "https://pokeapi.co/api/v2/pokemon?limit=100"
            })
            set({pokemons: pokemonsResult.results})
        } catch (error) {
            set({pokemons: []})
        } finally{
            set({isLoading: false})
        }
    },
    pokemons: [],
    getPokemonImg: async (id) => {
        if (!id) return;
        try {
            const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            set({ pokemonImg: pokemonImg })
        } catch (error) {
            set({ pokemonImg: "" })
        }
    },
    pokemonImg: "",
    isLoading: false,
}))

export default usePokemonsStore
import React, { useEffect, useState } from "react";
import { ContextPokemon } from "./Context";
import axios from "axios";

const GlobalState = (props) => {
    const [pokemon, setPokemon] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [chosenPokemon, setChosenPokemon] = useState(undefined)

    const Base_URL = 'https://pokeapi.co/api/v2/pokemon?offset=0'

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = async () => {
        try {
            const response = await axios.get(Base_URL)
            setPokemon(response.data.results)

        } catch (error) {
            alert('Ocorreu um Erro')
        }
    }


    const getPokemonDetails = async (pokemon, array) => {
        const url = `${pokemon.url}`
        try {
            const response = await axios.get(url)
            setPokemonDetails(pokemonDetails => [...pokemonDetails, response.data])
        } catch (error) {
            alert('Ocorreu um Erro')
        }
    }


    const states = { pokemon, pokemonDetails, chosenPokemon, Base_URL, pokedex }
    const setter = { setPokemon, setPokemonDetails, setChosenPokemon, setPokedex }
    const requests = { getPokemons, getPokemonDetails }

    return (
        <ContextPokemon.Provider value={{ states, setter, requests }}>
            {props.children}
        </ContextPokemon.Provider>
    )
}

export default GlobalState
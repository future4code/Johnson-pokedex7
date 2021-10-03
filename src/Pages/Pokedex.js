import styled from 'styled-components'
import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../Components/header'
import background from '../Images/background.png'
import { PokemonCard } from '../Components/pokemonsCard'
import { useHistory } from 'react-router'
import axios from 'axios'
import { ContextPokemon } from '../Context/Context'
import { goToDetails } from '../Routes/Routes'

const Wrapper = styled.div`
    background-image: url(${background}) ;
    background-repeat:no-repeat;
    background-size:cover;
    height: 100vh;
    width:100%;
    display: flex;
    align-items: center;
    flex-direction:column;
`
const Main = styled.div`
    height: 100%;
    width: 80%;
    display: grid;
    grid-template-rows: 22vh 22vh 22vh 22vh ;
    grid-template-columns: auto auto auto auto auto;
`

export const Pokedex = () => {
    const history = useHistory()
    const { states, setter, requests } = useContext(ContextPokemon)

    useEffect(() => {
       
    }, [])


    const setDetails = (id) => {
        setter.setClickedPokemon(id)
        goToDetails(history)
    }

    const renderCards = () =>
        states.pokemonDetails.map((pokemon) => {
            return (
                <PokemonCard 
                key={pokemon.id}
                sprite={pokemon.sprites.front_default}    
                name={pokemon.name}
                details={() => setDetails(pokemon.id)}
                />
            )
        })



    return (
        <Wrapper>
            <Header />
            <Main>
            </Main>
        </Wrapper>
    )
}
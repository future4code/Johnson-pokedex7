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
    grid-template-columns: 20% 20% 20% 20% 20%;

    @media(max-Width:1360px){
        grid-template-columns: auto auto auto auto;
        overflow:scroll;


        ::-webkit-scrollbar {
        overflow-x: hidden;
    }


    }

    @media(max-Width:1100px){
        grid-template-columns: auto auto auto ;
    }

    
    @media(max-Width:800px){
        grid-template-columns: auto auto;
    }


    
    @media(max-Width:600px){
        display: flex;
        flex-direction: column;
        ::-webkit-scrollbar {
        display: none;
        }
    }


    `

export const Pokedex = () => {
    const history = useHistory()
    const { states, setter, requests } = useContext(ContextPokemon)

    useEffect(() => {
        console.log(states.pokedex)
    }, [])

    const setDetails = (pokemon) => {
        goToDetails(history)
        setter.setChosenPokemon(pokemon)
    }

    const removePokemon = (pokemon) =>{
        setter.setPokedex(states.pokedex.filter((pokedexPokemon) => {
            return pokedexPokemon.id != pokemon.id
        }))
    }
    
    const renderCards = () =>
        states.pokedex.map((pokemon) => {

            return (
                <PokemonCard
                    key={pokemon.id}
                    sprite={pokemon.sprites.front_default}
                    name={pokemon.name}
                    button={"Remover"}
                    details={() => setDetails(pokemon)}
                    onclick={() => removePokemon(pokemon)}

                />
            )
        })



    return (
        <Wrapper>
            <Header />
            <Main>
                {renderCards()}
            </Main>
        </Wrapper>
    )
}
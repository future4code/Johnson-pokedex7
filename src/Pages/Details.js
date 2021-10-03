import styled from 'styled-components'
import background from '../Images/background.png'
import { Header } from '../Components/header'
import React, { useContext, useEffect, useState } from 'react'
import { ContextPokemon } from '../Context/Context'
import { goToHome } from '../Routes/Routes'
import { useHistory } from 'react-router'



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
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const PokedexLeft = styled.div`
    background-color: darkred;
    width: 400px;
    height:600px;
    display:flex;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LeftGreenScreen = styled.div`
    background-color: greenyellow;
    height: 500px;
    width: 350px;
    border-radius: 10px;
    display:grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
`

const PokedexRight = styled(PokedexLeft)`
    height:500px;
    border-radius:0px;
    
`
const TextBox = styled.div`
    margin: 30px 0 50px 30px
`

const Text = styled.p`
`
const RightGreenScreen = styled(LeftGreenScreen)`
    height:450px;
    display: flex;
    flex-direction: column; 
`

const PokedexCenter = styled.div`
    background-color: darkred;
    width: 25px;
    height: 500px;
    background: linear-gradient(to right, #600707, #C00D0D);
`
const PokedexCenter2 = styled.div`
    background-color: darkred;
    width: 25px;
    height: 500px;
    background: linear-gradient(to left, #600707, #C00D0D);
`
const ImageBox = styled.div`
    width:100%;
    heigth:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Details = () => {
    const { states, setter, requests } = useContext(ContextPokemon)
    const [characteristics, setCharacteristics] = useState({ name: '', height: '', hp: 0, attack: 0, defense: 0, specialattack: 0, specialdefense: 0, weight: 0, abilities:[] })
    const [sprites, setSprites] = useState({ front: '', frontshiny: '', back: '', backshiny: '' })

    const history = useHistory()

    useEffect(() => {
        choosePokemon()
    }, [states.clickedPokemon])



    const choosePokemon = () =>
        states.pokemonDetails.map((pokemon) => {


            if (pokemon.id === states.clickedPokemon) {
                setSprites({
                    front: pokemon.sprites.front_default,
                    frontshiny: pokemon.sprites.front_shiny,
                    back: pokemon.sprites.back_default,
                    backshiny: pokemon.sprites.back_shiny
                })

                setCharacteristics({
                    name: pokemon.name,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    hp: pokemon.stats[0].base_stat,
                    defense: pokemon.stats[1].base_stat,
                    specialattack: pokemon.stats[2].base_stat,
                    specialdefense: pokemon.stats[3].base_stat,
                    abilities:pokemon.abilities
                    

                })
                console.log(pokemon)
            }
        })


    return (
        <Wrapper>
            <Header>
            </Header>
            <Main>
                <PokedexLeft>
                    <LeftGreenScreen>
                        <ImageBox><img src={sprites.front} /></ImageBox>
                        <ImageBox><img src={sprites.back} /></ImageBox>
                        <ImageBox><img src={sprites.frontshiny} /></ImageBox>
                        <ImageBox><img src={sprites.backshiny} /></ImageBox>
                    </LeftGreenScreen>
                </PokedexLeft>

                <PokedexCenter>
                </PokedexCenter>
                <PokedexCenter2>
                </PokedexCenter2>

                <PokedexRight>
                    <RightGreenScreen>
                        <TextBox>
                            <Text> Name: {characteristics.name} </Text>
                            <Text> Height: {characteristics.height}ft</Text>
                            <Text> Weight: {characteristics.weight}</Text>
                            <Text> Hp: {characteristics.hp}</Text>
                            <Text> Attack: {characteristics.attack} </Text>
                            <Text> Defense: {characteristics.defense} </Text>
                            <Text> Special-Attack: {characteristics.specialattack}</Text>
                            <Text> Special-Defense: {characteristics.specialdefense}</Text>
                            <Text> Abilities: {characteristics.abilities.map((ab)=>{
                                return (
                                    <span>{ab.ability.name} </span>
                                )
                            })}</Text>
                        </TextBox>
                    </RightGreenScreen>
                </PokedexRight>


            </Main>

        </Wrapper>
    )
}
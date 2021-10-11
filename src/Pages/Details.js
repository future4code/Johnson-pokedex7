import styled from 'styled-components'
import background from '../Images/background.png'
import { Header } from '../Components/header'
import React, { useContext, useEffect } from 'react'
import { ContextPokemon } from '../Context/Context'
import { useHistory } from 'react-router'
import { goToHome } from '../Routes/Routes'


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

    const history = useHistory()

  
    const Pokedex = () => {
        if (states.chosenPokemon === undefined) {
            alert('Escolha um Pokemon')
            goToHome(history)
            return(
                <>
                </>
            )
        } else {
            return (
                <Wrapper>
                    <Header>
                    </Header>
                    <Main>
                        <PokedexLeft>
                            <LeftGreenScreen>
                                <ImageBox><img src={states.chosenPokemon.sprites.front_default} alt='Pokemon_Front_Default' /></ImageBox>
                                <ImageBox><img src={states.chosenPokemon.sprites.front_shiny} alt='Pokemon_Front_Shiny' /></ImageBox>
                                <ImageBox><img src={states.chosenPokemon.sprites.back_default} alt='Pokemon_Back_Default' /></ImageBox>
                                <ImageBox><img src={states.chosenPokemon.sprites.back_shiny} alt='Pokemon_Back_Shiny' /></ImageBox>
                            </LeftGreenScreen>
                        </PokedexLeft>

                        <PokedexCenter>
                        </PokedexCenter>
                        <PokedexCenter2>
                        </PokedexCenter2>

                        <PokedexRight>
                            <RightGreenScreen>
                                <TextBox>
                                    <Text> Name: {states.chosenPokemon.stats[0].base_stat} </Text>
                                    <Text> Height: {states.chosenPokemon.stats[0].base_stat}ft</Text>
                                    <Text> Weight: {states.chosenPokemon.stats[0].base_stat}</Text>
                                    <Text> Hp: {states.chosenPokemon.stats[0].base_stat}</Text>
                                    <Text> Attack: {states.chosenPokemon.stats[1].base_stat} </Text>
                                    <Text> Defense: {states.chosenPokemon.stats[2].base_stat} </Text>
                                    <Text> Special-Attack: {states.chosenPokemon.stats[3].base_stat}</Text>
                                    <Text> Special-Defense: {states.chosenPokemon.stats[4].base_stat}</Text>
                                    <Text> Abilities: </Text>
                                </TextBox>
                            </RightGreenScreen>
                        </PokedexRight>


                    </Main>

                </Wrapper>
            )
        }
    }

    return Pokedex()
}
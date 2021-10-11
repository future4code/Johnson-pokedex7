import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    background-color: #9ACD32;
    width: 70%;
    height: 80%;
    border: solid;
    border-radius: 10px;
    border-color: darkred;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width:165px;
    max-height: 200px;
    font-family: "PokemonGameBoy";


    @media(max-Width:600px){
       margin-top: 60px;
       width:165px;
       height:200px;
   }
    
`
const Sprite = styled.img`
    width: 80%;
    height: 67%;
`

const Name = styled.p`
    margin:0;
    font-family: 'PokemonGB';

`

const ButtonBox = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    margin-top:auto;

  
`

const PokedexButton = styled.button`
    width: 100%;
    background-color: transparent;
    border:solid;
    border-width: 1px;
    border-bottom: 0;
    border-left: 0;

    :hover{
        cursor: pointer;
    }

    :active{
        background-color:darkgreen
    }
    
`


const DetailsButton = styled(PokedexButton)`
    border-right: 0;
`


export const PokemonCard = (props) => {

    return (
        <Wrapper>
            <Card>
                <Sprite src={props.sprite}></Sprite>
                <Name>{props.name}</Name>
                <ButtonBox>
                    <PokedexButton onClick={props.onclick} >{props.button}</PokedexButton>
                    <DetailsButton onClick={props.details} >Detalhes</DetailsButton>
                </ButtonBox>
            </Card>
        </Wrapper>
    )
}
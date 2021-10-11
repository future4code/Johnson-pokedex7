import React from "react";
import { useHistory } from "react-router";
import styled from 'styled-components'
import PokemonLogo from "../Images/PokemonLogo.png"
import { goToBattle, goToHome, goToPokedex } from "../Routes/Routes";
import { HeaderButton } from "./button";
import home from '../Images/home.png'
import pokedexicon2 from "../Images/pokedexicon2.jpg"
import battle from "../Images/battle.png"


const Wrapper = styled.div`
    height: 10vh;
    background-color: #FF0000;
    width: 100%;
    background: linear-gradient(to top, #600707, #C00D0D);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    @media(max-Width:600px){
        height: 15vh;
    }
`
const Logo = styled.img`
    width: 300px;
    height: 85%;

    @media(max-Width:600px){
        display: none;
    }
`

const ButtonBox = styled.div`
    position:absolute;
    display: flex;
    align-items: center;
    right:0;
    height: 100%;

    @media(max-Width:600px){
        position: relative;
    }
`

const BattleButtonBox = styled.div`
    
    @media(max-Width:600px){
        display: none;
    }
`


export const Header = () => {
    const history = useHistory()

    return (
        <Wrapper>
            <Logo src={PokemonLogo} />
            <ButtonBox>
                <HeaderButton name='Home' icon={home} onclick={() => goToHome(history)} ></HeaderButton>
                <HeaderButton name='Pokédex' icon={pokedexicon2} onclick={() => goToPokedex(history)} ></HeaderButton>
                <BattleButtonBox>
                    <HeaderButton name='Battle' icon={battle} onclick={() => goToBattle(history)} ></HeaderButton>
                </BattleButtonBox>

            </ButtonBox>
        </Wrapper>
    )
}
import React from "react";
import { useHistory } from "react-router";
import styled from 'styled-components'
import PokemonLogo from "../Images/PokemonLogo.png"
import { goToHome, goToPokedex } from "../Routes/Routes";

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
`

const ButtonBox = styled.div`
    position:absolute;
    right:10px;
    height: 100%;
`

const Button = styled.button`
    height: 100%;
    width: 80px;
    background-color: transparent;
    border: solid;
    margin-right: 5px;
    border-width:0.5px;
    border-top: 0;
    border-bottom: 0;
    font-size:15px;
`

export const Header = () => {
    const history = useHistory()

    return (
        <Wrapper>
            <Logo src={PokemonLogo} />
            <ButtonBox>
                <Button onClick={() => goToHome(history)} >Home</Button>
                <Button onClick={() => goToPokedex(history) } >Pokédex</Button>
            </ButtonBox>
        </Wrapper>
    )
}
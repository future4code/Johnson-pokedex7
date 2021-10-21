import { createGlobalStyle } from 'styled-components';

import PokemonGB from './PokemonGB.ttf';


export const GlobalStyle =  createGlobalStyle`
    @font-face {
        font-family: 'PokemonGameBoy';
        src: local('PokemonGameBoy'),
        url(${PokemonGB}) format('ttf');
        font-weight: bold;
        font-style: normal;
    }
`;
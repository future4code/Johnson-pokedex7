import React from 'react';
import { Router } from './Routes/Router';
import './App.css';
import GlobalState from './Context/GlobalState';
import {GlobalStyle} from './fonts/fonts';

const App = () => {

  return (
    <GlobalState>
      <GlobalStyle />

      <Router />
    </GlobalState>
  )
}

export default App;

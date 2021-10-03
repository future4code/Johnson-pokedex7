import { Router } from './Routes/Router';
import './App.css';
import GlobalState from './Context/GlobalState';

const App = () => {

  return (
      <GlobalState>
        <Router/>
      </GlobalState>
  )}

export default App;

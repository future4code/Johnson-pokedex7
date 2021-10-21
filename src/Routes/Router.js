import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Details } from '../Pages/Details'
import { Pokedex } from '../Pages/Pokedex'
import { Battle } from '../Pages/Battle'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>

                <Route exact path='/pokedex' >
                    <Pokedex></Pokedex>
                </Route>

                <Route exact path='/details' >
                    <Details />

                </Route>

                
                <Route exact path='/battle' >
                    <Battle/>

                </Route>


            </Switch>
        </BrowserRouter>
    )
}
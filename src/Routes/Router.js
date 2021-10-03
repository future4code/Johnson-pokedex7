import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Details } from '../Pages/Details'
import { Pokedex } from '../Pages/Pokedex'
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

            </Switch>
        </BrowserRouter>
    )
}
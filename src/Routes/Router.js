import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import React from 'react'

export const Router = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/home' >
                </Route>

                <Route exact path='/pokedex' >
                </Route>

                <Route exact path='/details' >
                </Route>
                
            </Switch>
        </Router>
    )
}
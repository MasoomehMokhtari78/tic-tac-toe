import React from 'react'
import Multiplayer from './Multiplayer/Multiplayer';
import Singleplayer from './Singleplayer/Singleplayer';
import MainPage from './MainPage'
import Navbar from './Navbar'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
export default function App() {
    return (
        <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/home" exact component={MainPage}></Route>
                    <Route path="/multiplayer" component={Multiplayer}></Route>
                    <Route path="/singleplayer" component={Singleplayer}></Route>
                    <Redirect to="/home" />
                </Switch>

           
            
        </BrowserRouter>
        


    )
}

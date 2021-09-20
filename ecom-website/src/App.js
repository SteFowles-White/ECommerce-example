import React from 'react';
import { useState } from 'react';
import Header from './layout/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './pages/Home';
import Men from './pages/Mens';
import Women from './pages/Womens';
import Basket from './pages/Basket';
import RenderLogInModel from './components/LogInModel'

const App = () => {
    const [logIn, setLogIn] = useState(false);

    return(
        <React.Fragment>
            <Router>
                <Header loginModel={setLogIn}/>
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route path='/mens' exact>
                    <Men/>
                </Route>
                <Route path='/womens' exact>
                    <Women/>
                </Route>
                <Route path='/basket' exact>
                    <Basket/>
                </Route>
            </Router>
            {logIn === true && <RenderLogInModel/> }
        </React.Fragment>
    )
}

export default App;
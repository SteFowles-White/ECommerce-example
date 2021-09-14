import React from 'react';
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

const App = () => {

    return(
        <React.Fragment>
            <Router>
                <Header/>
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
        </React.Fragment>
    )
}

export default App;
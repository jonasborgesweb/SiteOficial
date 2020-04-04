import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Import Pages
import Home from './pages/home'
import Blog from './pages/blog'
import About from './pages/about'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/blog' component={Blog} />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    )
}
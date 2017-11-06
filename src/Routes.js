import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

export default () => {
    return (
        <div className="fullscreen">
            <div className="pagecontainer">
            <div className="pagebody">
                <Router>
                    <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/products" component={Products} />
                        <Route path="/cart" component={Cart} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer/>
                    </div>
                </Router>
            </div>
            </div>
        </div>
    )
}
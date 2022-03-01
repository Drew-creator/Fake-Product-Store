import React, { Component } from 'react';
import About from './About'
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import Cart from './Cart';
import Checkout from './Checkout';
import Nav from './Nav';
import './App.css';
import { AnimatePresence } from "framer-motion";
import {BrowserRouter as Router, Switch, Route, useLocation, useHistory} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <AnimatePresence exitBeforeEnter>
            <Nav />
            <Switch>
              <Route path="/" exact component={Shop}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/about" component={About}/>
              <Route path="/:id" component={ItemDetail}/> 
            </Switch> 
          </AnimatePresence>
        </div>
      </Router>
    )
  }
}

export default App;


// add filtering search bar
// add cart page
// add register and login page
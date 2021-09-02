import React, { Component } from 'react';
import Nav from './Nav'
import About from './About'
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import Footer from './Footer';
import './App.css';
import { AnimatePresence } from "framer-motion";
import {BrowserRouter as Router, Switch, Route, useLocation, useHistory} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Nav />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact component={Shop}/>
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

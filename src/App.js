import React, { Component } from 'react';
import Nav from './Nav'
import About from './About'
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import Footer from './Footer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Shop}/>
            <Route path="/about" component={About}/>
            <Route path="/:id" component={ItemDetail}/> 
          </Switch> 
        </div>
      </Router>
    )
  }
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import ErrorPage from './pages/ErrorPage';
import Guest from './pages/Guest';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Master from './pages/Master'

class App extends Component {
  

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Master} />
          <Route exact path="/guest" component={Auth}/>
          <Route exact path="/auth" component={Guest}/> 
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
      
    );
  }
}

export default App;

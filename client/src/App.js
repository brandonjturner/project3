import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from './pages/Auth';
import ErrorPage from './pages/ErrorPage';
import Guest from './pages/Guest';

class App extends Component {
  

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Guest} />
          <Route exact path="/auth" component={Auth}/> 
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
      
    );
  }
}

export default App;

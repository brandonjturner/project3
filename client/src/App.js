import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from './pages/Auth';
import ErrorPage from './pages/ErrorPage';
import Guest from './pages/Guest';
import axios from 'axios';

class App extends Component {
  
  state = {
    user: null,
    loggedIn: false
  }

  loginUser = (user) => {
    console.log('User logged in.');
    this.setState({
      user: user,
      loggedIn: true
    });
  }

  logoutUser = () => {
    console.log('User logged out.');
    this.setState({
      user: null,
      loggedIn: false
    });
  }

  render() {
    const { user, loggedIn }  = this.state;
    
    const props = {
      user: user,
      loggedIn: loggedIn,
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
      updateUser: this.updateUser
    }

    return(
      <Router>
        <Switch>
          <Route exact path="/" 
          render={(routeProps) => (<Guest {...routeProps} {...props}/>)} 
          />
          <Route exact path="/auth" 
          render={(routeProps) => (<Auth {...routeProps} {...props}/>)}
          /> 
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
      
    );
  }
}

export default App;

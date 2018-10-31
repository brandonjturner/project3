import React, { Router, Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/guest" />
          <Route exact path="/auth" /> 
        </Switch>
      </Router>
      
    );
  }
}

export default App;

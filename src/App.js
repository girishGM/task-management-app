import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login.component';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
      return(
        <div className='App'>
          <Router>
            <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </div>  
      );
  }
}
export default App;



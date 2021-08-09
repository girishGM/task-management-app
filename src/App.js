import React, { Component } from 'react';
import { DashboardTop } from './components/dashboard/dashboard-top/index'; 
import { DashboardList } from './components/dashboard/dashboard-list/index';
import { Header } from './components/header/header.component';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SearchBox } from './components/shared/search-box/search-box.component';
import Login from './components/login/login.component';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {

  constructor(){
    super();
  }

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



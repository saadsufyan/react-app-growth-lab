import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Signup from './pages/signup';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Verification from './pages/verification';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/verification" component={Verification} />
    </Switch>
    </Router>
  );
}

export default App;

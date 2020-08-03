import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Checkout from './Views/Checkout/Checkout.View';

function App() {
  return (
    <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
      <Route exact path="/" component={Checkout} />
  </Router>
  );
}

export default App;

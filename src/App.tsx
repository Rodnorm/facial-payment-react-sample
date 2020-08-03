import React from 'react';
import logo from './logo.svg';
import './App.css';
import Camera from './Components/Camera/Camera.Component';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

function App() {
  return (
    <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
      <Route exact path="/" component={Camera} />
    {/* <div className="route">
      <Route exact path="/photo" component={ImageInput} />
      <Route exact path="/camera" component={VideoInput} />
    </div> */}
      {/* <Camera /> */}
  </Router>
  );
}

export default App;

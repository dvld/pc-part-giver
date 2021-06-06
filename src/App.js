import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PreLaunch from './pages/PreLaunch';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={PreLaunch} />
      </Switch>
    </>
  );
}

export default App;

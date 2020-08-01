import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/home/Home';
import Header from './components/header/Header';
import About from './pages/about/About';
import Error404 from './pages/error404/Error404';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  return (
    <div>
      <Switch>
        <Header/>
      </Switch>
      <Switch>
        <Route type="all" exact path='/pokedex/' component={Home} />
        <Route type="all" exact path='/pokedex/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;

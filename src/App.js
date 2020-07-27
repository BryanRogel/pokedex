import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/home/Home';
import Header from './components/header/Header';
import About from './pages/about/About';

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
        {/* <Route type="public" exact path="/error403" component={Error403} />
        <Route type="public" path="*" component={Error404} /> */}
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Home from './Home';
import Counters from './Counters';
import Astronauts from './Astronauts';

export default function(store) {
  return (
    <Router component={App}>
      <Route path="/" component={Home}/>
      <Route path="/counter" component={Counters}/>
      <Route path="/astros" component={Astronauts}/>
    </Router>
  )
}

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counters from './counters';
import astronauts from './astronauts';

export default combineReducers({
  routing: routerReducer,
  counters,
  astronauts
});

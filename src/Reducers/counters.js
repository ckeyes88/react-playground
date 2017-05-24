import { Map } from 'immutable';

export default function(state = Map({}), action) {
  switch(action.type) {
    case "INCREMENT_COUNTER": 
      return state.set(action.name, state.get(action.name) + 1);
    case "DECREMENT_COUNTER": 
      return state.set(action.name, state.get(action.name) - 1);
    case "ADD_COUNTER": 
      if(state.get(action.name)) {
        return state;
      } else {
        return state.set(action.name, 0);
      }
    default: 
      return state;
  }
}
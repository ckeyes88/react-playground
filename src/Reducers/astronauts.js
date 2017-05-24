import { List } from 'immutable';

export default function(state = List([]), action) {
  switch (action.type) {
    case "GET_ASTROS":
      return List(action.astros)
    default:
      return state
  }
}
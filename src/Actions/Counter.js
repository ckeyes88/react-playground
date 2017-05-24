export function incrementCount(name) {
  return {type: "INCREMENT_COUNTER", name: name };
}

export function decrementCount(name) {
  return {type: "DECREMENT_COUNTER", name: name };
}

export function addCounter(name) {
  return {type: "ADD_COUNTER",name: name };
}
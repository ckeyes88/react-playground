import reducers from '../Reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';


export default function () {
  return createStore(
    reducers,
    applyMiddleware(
      createLogger()
    )
  )
}

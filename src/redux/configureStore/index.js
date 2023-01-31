import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { createStore } from @reduxjs/toolkit
import monitorReducersEnhancer from '../enhancers/monitorReducer';
import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  // if (process.env.NODE_ENV === 'development') {
  //   middlewares.push(secretMiddleware)
  // }
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);
  // createStore deprecated
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store
}

// 1- The redux-thunk middleware, which allows simple asynchronous use of dispatch.
// 2 -A middleware which logs dispatched actions and the resulting new state.
// 3- An enhancer which logs the time taken for the reducers to process each action.


import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

let createStoreWithMiddleware;
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  createStoreWithMiddleware = compose(
    applyMiddleware(sagaMiddleware, loggerMiddleware),
  )(createStore);
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(sagaMiddleware),
  )(createStore);
}

export default function configureStore(initialState) {
  const reducers = require('./modules');
  const store = createStoreWithMiddleware(combineReducers(reducers), initialState);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function withReduxSaga(BaseComponent, mapStateToProps = null, mapDispatchToProps = null) {
  return withRedux(configureStore, mapStateToProps, mapDispatchToProps)(nextReduxSaga(BaseComponent))
}

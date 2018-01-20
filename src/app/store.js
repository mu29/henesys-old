import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

let createStoreWithMiddleware;
const logger = createLogger();
const saga = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  createStoreWithMiddleware = compose(applyMiddleware(saga, logger))(createStore);
} else {
  createStoreWithMiddleware = compose(applyMiddleware(saga))(createStore);
}

export default function configureStore(initialState) {
  /* eslint-disable */
  const reducers = require('./modules');
  /* eslint-enable */
  const store = createStoreWithMiddleware(
    combineReducers(reducers),
    initialState,
  );
  store.sagaTask = saga.run(rootSaga);
  return store;
}

export function withReduxSaga(BaseComponent, mapStateToProps = null, mapDispatchToProps = null) {
  return withRedux(
    configureStore,
    mapStateToProps,
    mapDispatchToProps,
  )(nextReduxSaga(BaseComponent));
}

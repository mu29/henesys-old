import { all, fork } from 'redux-saga/effects';
import * as menuSaga from './MenuSaga';
import * as postSaga from './PostSaga';

export default function* root() {
  yield all([
    ...Object.keys(menuSaga).map(key => fork(menuSaga[key])),
    ...Object.keys(postSaga).map(key => fork(postSaga[key])),
  ]);
}

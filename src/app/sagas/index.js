import { all, fork } from 'redux-saga/effects';
import * as postSaga from './PostSaga';

export default function* root() {
  yield all([
    ...Object.keys(postSaga).map(key => fork(postSaga[key])),
  ]);
}

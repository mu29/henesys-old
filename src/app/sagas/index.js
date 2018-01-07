import { all, fork } from 'redux-saga/effects';
import * as menuSaga from './MenuSaga';

export default function* root() {
  yield all([
    ...Object.keys(menuSaga).map(key => fork(menuSaga[key])),
  ]);
}

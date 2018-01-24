import { all, fork } from 'redux-saga/effects';
import * as authSaga from './AuthSaga';
import * as postSaga from './PostSaga';
import * as commentSaga from './CommentSaga';

export default function* root() {
  yield all([
    ...Object.keys(authSaga).map(key => fork(authSaga[key])),
    ...Object.keys(postSaga).map(key => fork(postSaga[key])),
    ...Object.keys(commentSaga).map(key => fork(commentSaga[key])),
  ]);
}

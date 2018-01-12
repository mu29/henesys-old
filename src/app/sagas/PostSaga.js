// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchPostListActionTypes,
  fetchPostListActions,
} from '../modules/Post';
import { readPostList } from '../firebase/PostApi'

function* loadPostList({ tag, last }) {
  const { posts, error } = yield call(readPostList, tag, last);
  yield put(posts ? fetchPostListActions.success({ posts }) : fetchPostListActions.failure({ error }));
}

export function* watchFetchPostList() {
  yield takeLatest(fetchPostListActionTypes.REQUEST, loadPostList);
}

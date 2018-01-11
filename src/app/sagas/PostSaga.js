// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchPostListActionTypes,
  fetchPostActions,
} from '../modules/Post';
import { readPostList } from '../firebase/PostApi'

function* loadPostList({ tag, last }) {
  const { posts, error } = yield call(readPostList, tag, last);
  yield put(posts ? fetchPostActions.success({ posts }) : fetchPostActions.failure({ error }));
}

export function* watchFetchPostList() {
  yield takeLatest(fetchPostListActionTypes.REQUEST, loadPostList);
}

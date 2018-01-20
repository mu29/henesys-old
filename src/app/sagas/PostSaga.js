// @flow

import { takeEvery, takeLatest, put, call, all } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'modules/Alert';
import {
  createPostActionTypes,
  createPostActions,
  fetchPostListActionTypes,
  fetchPostListActions,
  fetchPostActionTypes,
  fetchPostActions,
} from 'modules/Post';
import { createPost, readPostList, readPost } from 'firebase/PostApi';
import { Router } from 'routes';

function* addPost({ tag, title, content }) {
  yield put(showLoading(createPostActionTypes.REQUEST));
  const { post, error } = yield call(createPost, tag, title, content);

  if (!post) {
    yield all([
      put(hideLoading()),
      put(createPostActions.failure({ error })),
    ]);
    return;
  }

  Router.pushRoute(`/posts?tag=${tag}`);
  yield all([
    put(hideLoading()),
    put(createPostActions.success({ post })),
  ]);
}

function* loadPostList({ tag, last }) {
  yield put(showLoading(fetchPostListActionTypes.REQUEST));
  const { posts, error } = yield call(readPostList, tag, last);

  yield all([
    put(hideLoading()),
    put(posts ?
      fetchPostListActions.success({ posts }) :
      fetchPostListActions.failure({ error })),
  ]);
}

function* loadPost({ id }) {
  yield put(showLoading(fetchPostActionTypes.REQUEST));
  const { post, error } = yield call(readPost, id);

  yield all([
    put(hideLoading()),
    post ?
      fetchPostActions.success({ post }) :
      fetchPostActions.failure({ error }),
  ]);
}

export function* watchCreatePost() {
  yield takeLatest(createPostActionTypes.REQUEST, addPost);
}

export function* watchFetchPostList() {
  yield takeEvery(fetchPostListActionTypes.REQUEST, loadPostList);
}

export function* watchFetchPost() {
  yield takeLatest(fetchPostActionTypes.REQUEST, loadPost);
}

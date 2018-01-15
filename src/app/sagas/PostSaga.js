// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import {
  createPostActionTypes,
  createPostActions,
  fetchPostListActionTypes,
  fetchPostListActions,
} from 'modules/Post';
import { createPost, readPostList } from 'firebase/PostApi';

function* addPost({ tag, title, content }) {
  const { post, error } = yield call(createPost, tag, title, content);
  yield put(post ?
    createPostActions.success({ post }) :
    createPostActions.failure({ error }));
}

function* loadPostList({ tag, last }) {
  const { posts, error } = yield call(readPostList, tag, last);
  yield put(posts ?
    fetchPostListActions.success({ posts }) :
    fetchPostListActions.failure({ error }));
}

export function* watchCreatePost() {
  yield takeLatest(createPostActionTypes.REQUEST, addPost);
}

export function* watchFetchPostList() {
  yield takeLatest(fetchPostListActionTypes.REQUEST, loadPostList);
}

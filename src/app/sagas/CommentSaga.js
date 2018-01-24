// @flow

import { takeEvery, takeLatest, put, call, all } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'modules/Alert';
import {
  createCommentActionTypes,
  createCommentActions,
  fetchCommentListActionTypes,
  fetchCommentListActions,
} from 'modules/Comment';
import { createComment, readCommentList } from 'firebase/CommentApi';

function* addComment({ postId, content }) {
  yield put(showLoading(createCommentActionTypes.REQUEST));
  const { comment, error } = yield call(createComment, postId, content);

  if (!comment) {
    yield all([
      put(hideLoading()),
      put(createCommentActions.failure({ error })),
    ]);
    return;
  }

  yield all([
    put(hideLoading()),
    put(createCommentActions.success({ comment })),
  ]);
}

function* loadCommentList({ postId }) {
  yield put(showLoading(fetchCommentListActionTypes.REQUEST));
  const { comments, error } = yield call(readCommentList, postId);

  yield all([
    put(hideLoading()),
    put(comments ?
      fetchCommentListActions.success({ comments }) :
      fetchCommentListActions.failure({ error })),
  ]);
}

export function* watchCreateComment() {
  yield takeLatest(createCommentActionTypes.REQUEST, addComment);
}

export function* watchFetchCommentList() {
  yield takeEvery(fetchCommentListActionTypes.REQUEST, loadCommentList);
}

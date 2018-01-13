// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import {
  registerActionTypes,
  registerActions,
  loginActionTypes,
  loginActions,
} from 'modules/Auth';
import { register, login } from 'firebase/AuthApi';

function* executeRegister({ email, password, name }) {
  const { user, error } = yield call(register, email, password, name);
  if (user) {
    yield put(registerActions.success({ user }));
    return;
  }

  let message = '';
  switch (error.code) {
    case 'auth/weak-password':
      message = '비밀번호는 최소 6자리 이상이어야 합니다.';
      break;
    case 'auth/email-already-in-use':
      message = '이미 사용중인 이메일 주소입니다.';
      break;
    case 'auth/invalid-email':
      message = '이미 사용중인 이메일 주소입니다.';
      break;
    default:
      message = error.code;
  }
  yield put(registerActions.failure({ error: message }));
}

function* executeLogin({ email, password }) {
  const { user, error } = yield call(login, email, password);
  yield put(user ? loginActions.success({ user }) : loginActions.failure({ error }));
}

export function* watchRegister() {
  yield takeLatest(registerActionTypes.REQUEST, executeRegister);
}

export function* watchLogin() {
  yield takeLatest(loginActionTypes.REQUEST, executeLogin);
}

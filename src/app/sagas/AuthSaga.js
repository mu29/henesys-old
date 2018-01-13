// @flow

import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  registerActionTypes,
  registerActions,
  loginActionTypes,
  loginActions,
} from 'modules/Auth';
import { showMessage, hideMessage, hideModal } from 'modules/Alert';
import { register, login } from 'firebase/AuthApi';

function* executeRegister({ email, password, name }) {
  const { user, error } = yield call(register, email, password, name);
  if (user) {
    yield all([
      put(registerActions.success({ user })),
      put(hideMessage()),
      put(hideModal()),
    ]);
    return;
  }

  let errorMessage = '';
  switch (error.code) {
    case 'auth/weak-password':
      errorMessage = '비밀번호는 최소 6자리 이상이어야 합니다.';
      break;
    case 'auth/email-already-in-use':
      errorMessage = '이미 사용중인 이메일 주소입니다.';
      break;
    case 'auth/invalid-email':
      errorMessage = '이메일 주소 형식이 아닙니다.';
      break;
    default:
      errorMessage = error.message;
  }
  yield put(showMessage(errorMessage));
}

function* executeLogin({ email, password }) {
  const { user, error } = yield call(login, email, password);
  if (user) {
    yield all([
      put(loginActions.success({ user })),
      put(hideMessage()),
      put(hideModal()),
    ]);
    return;
  }

  let errorMessage = '';
  switch (error.code) {
    case 'auth/user-not-found':
      errorMessage = '메일 주소를 확인해주세요.';
      break;
    case 'auth/wrong-password':
      errorMessage = '비밀번호를 확인해주세요.';
      break;
    default:
      errorMessage = error.message;
  }
  yield put(showMessage(errorMessage));
}

export function* watchRegister() {
  yield takeLatest(registerActionTypes.REQUEST, executeRegister);
}

export function* watchLogin() {
  yield takeLatest(loginActionTypes.REQUEST, executeLogin);
}

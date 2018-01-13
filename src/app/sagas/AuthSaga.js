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
  yield put(user ? registerActions.success({ user }) : registerActions.failure({ error }));
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

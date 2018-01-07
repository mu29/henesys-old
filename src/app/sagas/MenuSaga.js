// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchMenuActionTypes,
  fetchMenuActions,
} from '../modules/Menu';

function* loadMenus() {
  yield put(fetchMenuActions.success());
}

export function* watchFetchMenus() {
  yield takeLatest(fetchMenuActionTypes.REQUEST, loadMenus);
}

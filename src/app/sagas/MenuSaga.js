// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchMenuActionTypes,
  fetchMenuActions,
} from '../modules/Menu';
import { readMenus } from '../firebase/MenuApi'

function* loadMenus() {
  const { menus, error } = yield call(readMenus);
  yield put(menus ? fetchMenuActions.success({ menus }) : fetchMenuActions.failure({ error }));
}

export function* watchFetchMenus() {
  yield takeLatest(fetchMenuActionTypes.REQUEST, loadMenus);
}

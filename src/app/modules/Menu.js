// @flow

import { makeFetchActionTypes, makeFetchActionCreators } from './actionCreator';

const initialState = {
  menus: [],
};

export const fetchMenuActionTypes = makeFetchActionTypes('FETCH_MENU');
export const fetchMenuActions = makeFetchActionCreators(fetchMenuActionTypes);

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchMenuActionTypes.SUCCESS: {
      return { ...state,  posts: [...state.posts, action.post] };
    }
    default:
      return state;
  }
}

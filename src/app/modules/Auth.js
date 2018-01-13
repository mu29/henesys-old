import { makeFetchActionTypes, makeFetchActionCreators } from './actionCreator';

const initialState = {
  user: null,
};

export const registerActionTypes = makeFetchActionTypes('REGISTER');
export const registerActions = makeFetchActionCreators(registerActionTypes);

export const loginActionTypes = makeFetchActionTypes('LOGIN');
export const loginActions = makeFetchActionCreators(loginActionTypes);

export default function (state = initialState, action) {
  switch (action.type) {
    case registerActionTypes.SUCCESS:
      return { ...state, user: action.user };
    case loginActionTypes.SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
}

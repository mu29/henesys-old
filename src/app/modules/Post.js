import { uniqBy } from 'lodash';
import { makeFetchActionTypes, makeFetchActionCreators } from './actionCreator';

const initialState = {
  posts: [],
};

export const fetchPostListActionTypes = makeFetchActionTypes('FETCH_POST_LIST');
export const fetchPostListActions = makeFetchActionCreators(fetchPostListActionTypes);

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchPostListActionTypes.SUCCESS: {
      return { ...state,  posts: uniqBy([...state.posts, ...action.posts], 'id') };
    }
    default:
      return state;
  }
}

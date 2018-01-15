import { uniqBy } from 'lodash';
import { makeFetchActionTypes, makeFetchActionCreators } from './actionCreator';

const initialState = {
  posts: [],
};

export const fetchPostListActionTypes = makeFetchActionTypes('FETCH_POST_LIST');
export const fetchPostListActions = makeFetchActionCreators(fetchPostListActionTypes);

export const createPostActionTypes = makeFetchActionTypes('CREATE_POST');
export const createPostActions = makeFetchActionCreators(createPostActionTypes);

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchPostListActionTypes.SUCCESS:
      return { ...state, posts: uniqBy([...state.posts, ...action.posts], 'id') };
    case createPostActionTypes.SUCCESS:
      return { ...state, posts: [...state.posts, action.post] };
    default:
      return state;
  }
}

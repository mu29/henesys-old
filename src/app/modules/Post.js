import { uniqBy } from 'lodash';
import { makeFetchActionTypes, makeFetchActionCreators } from './actionCreator';

const initialState = {
  posts: [],
};

export const fetchPostListActionTypes = makeFetchActionTypes('FETCH_POST_LIST');
export const fetchPostListActions = makeFetchActionCreators(fetchPostListActionTypes);

export const fetchPostActionTypes = makeFetchActionTypes('FETCH_POST');
export const fetchPostActions = makeFetchActionCreators(fetchPostActionTypes);

export const createPostActionTypes = makeFetchActionTypes('CREATE_POST');
export const createPostActions = makeFetchActionCreators(createPostActionTypes);

export const createdAtDesc = (post1, post2) => (post2.createdAt - post1.createdAt);

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchPostListActionTypes.SUCCESS:
      return { ...state, posts: uniqBy([...action.posts, ...state.posts], 'id') };
    case fetchPostActionTypes.SUCCESS:
      return { ...state, posts: uniqBy([action.post, ...state.posts], 'id') };
    case createPostActionTypes.SUCCESS:
      return { ...state, posts: [action.post, ...state.posts] };
    default:
      return state;
  }
}

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

const createdAtDesc = (post1, post2) => (post1.createdAt < post2.createdAt);

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchPostListActionTypes.SUCCESS:
      return { ...state, posts: uniqBy([...action.posts, ...state.posts], 'id').sort(createdAtDesc) };
    case fetchPostActionTypes.SUCCESS:
      return { ...state, posts: uniqBy([action.post, ...state.posts], 'id').sort(createdAtDesc) };
    case createPostActionTypes.SUCCESS:
      return { ...state, posts: [action.post, ...state.posts].sort(createdAtDesc) };
    default:
      return state;
  }
}

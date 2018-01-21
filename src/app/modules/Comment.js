import { uniqBy } from 'lodash';
import { makeFetchActionTypes, makeFetchActionCreators } from './actionCreator';

const initialState = {
  comments: [],
};

export const fetchCommentListActionTypes = makeFetchActionTypes('FETCH_COMMENT_LIST');
export const fetchCommentListActions = makeFetchActionCreators(fetchCommentListActionTypes);

export const createCommentActionTypes = makeFetchActionTypes('CREATE_COMMENT');
export const createCommentActions = makeFetchActionCreators(createCommentActionTypes);

export const createdAtAsc = (comment1, comment2) => (comment1.createdAt - comment2.createdAt);

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchCommentListActionTypes.SUCCESS:
      return { ...state, comments: uniqBy([...action.comments, ...state.comments], 'id') };
    case createCommentActionTypes.SUCCESS:
      return { ...state, comments: [action.comment, ...state.comments] };
    default:
      return state;
  }
}

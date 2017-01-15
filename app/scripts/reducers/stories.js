import * as types from '../constants/actionTypes';

const initialState = { items: [] };

export default function news(state = initialState, action) {
  switch (action.type) {
    case types.GET_TOP_STORIES:
    case types.GET_NEWS_STORIES:
    case types.GET_ASK_STORIES:
    case types.GET_SHOW_STORIES:
    case types.GET_JOBS_STORIES:
      return initialState;
    case types.GET_STORIES_DETAILS_SUCCESS:
      return Object.assign({}, state, { items: action.data });
    default:
      return state;
  }
}

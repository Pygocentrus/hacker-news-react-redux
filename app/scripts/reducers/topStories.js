import * as types from '../constants/actionTypes';

const initialState = { items: [] };

export default function topStories(state = initialState, action) {
  switch (action.type) {
    case types.GET_TOP_STORIES_DETAILS_SUCCESS:
      return Object.assign({}, state, { items: action.data });
    default:
      return state;
  }
}

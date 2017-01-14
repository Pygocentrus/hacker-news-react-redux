import * as types from '../constants/actionTypes';

export function getNewsStories() {
  return {
    type: types.GET_NEWS_STORIES,
  };
};

export function getTopStories() {
  return {
    type: types.GET_TOP_STORIES,
  };
};

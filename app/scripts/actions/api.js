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

export function getAskStories() {
  return {
    type: types.GET_ASK_STORIES,
  };
};

export function getShowStories() {
  return {
    type: types.GET_SHOW_STORIES,
  };
};

export function getJobsStories() {
  return {
    type: types.GET_JOBS_STORIES,
  };
};

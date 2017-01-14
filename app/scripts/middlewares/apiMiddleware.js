import * as types from '../constants/actionTypes';
import * as routes from '../constants/routes';
import * as api from '../actions/api';
import HnApi from '../utils/hnApi';
import { getGenerator } from '../utils/api';

const apiMiddleware = store => next => action => {
  next(action);

  const GET = getGenerator(store);
  const hnApi = new HnApi(GET);

  switch (action.type) {
    case types.GET_NEWS_STORIES:
      hnApi.getNewsStories({ action: types.GET_NEWS_STORIES });
    default:
      break;
  }
};

export default apiMiddleware;

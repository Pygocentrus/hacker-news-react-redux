import * as types from '../constants/actionTypes';
import * as routes from '../constants/routes';
import * as api from '../actions/api';
import HnApi from '../utils/hnApi';
import { getGenerator, batchGenerator } from '../utils/api';

const apiMiddleware = store => next => action => {

  const GET = getGenerator(store);
  const BATCH = batchGenerator(store);
  const hnApi = new HnApi(GET, BATCH);

  switch (action.type) {
    case types.GET_NEWS_STORIES:
      hnApi.getNewsStories({ action: types.GET_NEWS_STORIES });
      next(action);
      break;
    case types.GET_NEWS_STORIES_SUCCESS:
      hnApi.getItemsDetails(action.data, { action: types.GET_NEWS_STORIES_DETAILS });
      next(action);
      break;
    case types.GET_TOP_STORIES:
      hnApi.getTopStories({ action: types.GET_TOP_STORIES });
      next(action);
      break;
    case types.GET_TOP_STORIES_SUCCESS:
      hnApi.getItemsDetails(action.data, { action: types.GET_TOP_STORIES_DETAILS });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;

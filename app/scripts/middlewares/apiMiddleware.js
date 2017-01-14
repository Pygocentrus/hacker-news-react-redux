import * as types from '../constants/actionTypes';
import * as routes from '../constants/routes';
import * as api from '../actions/api';
import hnApi from '../utils/hnApi';

const apiMiddleware = store => next => action => {
  next(action);

  switch (action.type) {
    default:
      break;
  }
};

export default apiMiddleware;

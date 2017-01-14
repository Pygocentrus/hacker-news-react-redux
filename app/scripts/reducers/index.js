import { combineReducers } from 'redux';
import newsStories from './newsStories';
import topStories from './topStories';

const rootReducer = combineReducers({
  newsStories,
  topStories,
});

export default rootReducer;

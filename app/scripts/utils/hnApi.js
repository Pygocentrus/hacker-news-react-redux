import { take } from 'lodash';
import { API_GENERIC } from '../constants/actionTypes';
import {
  conf,
  MAX_NEWS,
  item,
  user,
  maxitem,
  topstories,
  newstories,
  beststories,
  askstories,
  showstories,
  jobstories
} from './hnConf';

const defaultConf = { action: API_GENERIC, optionalData: {} };

class HackerNewsApi {

  constructor(GET, BATCH) {
    this.GET = GET;
    this.BATCH = BATCH;
  }

  batchGet(endpoints, config) {
    return this.BATCH(endpoints, config.action, config.optionalData);
  }

  get(endpoint, config) {
    return this.GET(endpoint, config.action, config.optionalData);
  }

  getUser(username, config = defaultConf) {
    return this.get(user(username), config.action, config.optionalData);
  }

  getItem(id, config = defaultConf) {
    return this.get(item(id), config);
  }

  getMaxitem(config = defaultConf) {
    return this.get(maxitem(), config);
  }

  getTopStories(config = defaultConf) {
    return this.get(topstories(), config);
  }

  getNewsStories(config = defaultConf) {
    return this.get(newstories(), config);
  }

  getAskStories(config = defaultConf) {
    return this.get(askstories(), config);
  }

  getShowStories(config = defaultConf) {
    return this.get(showstories(), config);
  }

  getJobsStories(config = defaultConf) {
    return this.get(jobstories(), config);
  }

  getItemsDetails(ids = [], config = defaultConf) {
    const urls = take(ids, MAX_NEWS).map(item);
    return this.batchGet(urls, config);
  }

  getBestStories(config = defaultConf) {
    return this.call(beststories(), config);
  }

}

export default HackerNewsApi;

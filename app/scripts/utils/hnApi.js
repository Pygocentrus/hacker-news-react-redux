import { take } from 'lodash';
import { conf, MAX_NEWS, item, user, maxitem, topstories, newstories, beststories } from './hnConf';
import { API_GENERIC } from '../constants/actionTypes';

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

  getItemsDetails(ids = [], config = defaultConf) {
    const urls = take(ids, MAX_NEWS).map(item);
    return this.batchGet(urls, config);
  }

  getBestStories(config = defaultConf) {
    return this.call(beststories(), config);
  }

}

export default HackerNewsApi;

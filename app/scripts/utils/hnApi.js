import { conf, item, user, maxitem, topstories, newstories, beststories } from './hnConf';
import { API_GENERIC } from '../constants/actionTypes';

const defaultConf = { action: API_GENERIC, optionalData: {} };

class HackerNewsApi {

  constructor(GET) {
    this.GET = GET;
  }

  call(endpoint, config) {
    return this.GET(endpoint, config.action, config.optionalData);
  }

  getUser(username, config = defaultConf) {
    return this.call(user(username), config.action, config.optionalData);
  }

  getItem(id, config = defaultConf) {
    return this.call(item(id), config);
  }

  getMaxitem(config = defaultConf) {
    return this.call(maxitem(), config);
  }

  getTopStories(config = defaultConf) {
    return this.call(topstories(), config);
  }

  getNewsStories(config = defaultConf) {
    return this.call(newstories(), config);
  }

  getBestStories(config = defaultConf) {
    return this.call(beststories(), config);
  }

}

export default HackerNewsApi;

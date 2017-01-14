export const conf = {
  base: 'https://hacker-news.firebaseio.com/v0',
  endpoints: {
    item: 'item',
    user: 'user',
    maxitem: 'maxitem',
    topstories: 'topstories',
    newstories: 'newstories',
    beststories: 'beststories',
  },
  search: {
    appId: 'UJ5WYC0L7X',
    searchOnlyApiKey: '8ece23f8eb07cd25d40262a1764599b1',
    index: 'Item_production',
  },
};

export const item = (id) => `${conf.base}/${conf.endpoints.item}/${id}.json`;
export const user = (username) => `${conf.base}/${conf.endpoints.user}/${username}.json`;
export const maxitem = () => `${conf.base}/${conf.endpoints.maxitem}.json`;
export const topstories = () => `${conf.base}/${conf.endpoints.topstories}.json`;
export const newstories = () => `${conf.base}/${conf.endpoints.newstories}.json`;
export const beststories = () => `${conf.base}/${conf.endpoints.beststories}.json`;

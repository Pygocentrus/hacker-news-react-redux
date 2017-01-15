export const MAX_NEWS = 10;

export const conf = {
  apiBase: 'https://hacker-news.firebaseio.com/v0',
  internalBase: 'https://news.ycombinator.com',
  endpoints: {
    item: 'item',
    user: 'user',
    maxitem: 'maxitem',
    topstories: 'topstories',
    newstories: 'newstories',
    beststories: 'beststories',
    askstories: 'askstories',
    showstories: 'showstories',
    jobstories: 'jobstories',
  },
  search: {
    appId: 'UJ5WYC0L7X',
    searchOnlyApiKey: '8ece23f8eb07cd25d40262a1764599b1',
    index: 'Item_production',
  },
};

export const itemPage = (id) => `${conf.internalBase}/item?id=${id}`;
export const userPage = (username) => `${conf.internalBase}/user?id=${username}`;

export const item = (id) => `${conf.apiBase}/${conf.endpoints.item}/${id}.json`;
export const user = (username) => `${conf.apiBase}/${conf.endpoints.user}/${username}.json`;
export const maxitem = () => `${conf.apiBase}/${conf.endpoints.maxitem}.json`;
export const topstories = () => `${conf.apiBase}/${conf.endpoints.topstories}.json`;
export const newstories = () => `${conf.apiBase}/${conf.endpoints.newstories}.json`;
export const beststories = () => `${conf.apiBase}/${conf.endpoints.beststories}.json`;
export const askstories = () => `${conf.apiBase}/${conf.endpoints.askstories}.json`;
export const jobstories = () => `${conf.apiBase}/${conf.endpoints.jobstories}.json`;
export const showstories = () => `${conf.apiBase}/${conf.endpoints.showstories}.json`;

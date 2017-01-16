import { get, range, isEmpty } from 'lodash';

const matchResultOrDefault = (hit, key) => {
  return !isEmpty(get(hit, `_highlightResult.${key}.matchedWords`))
    ? hit._highlightResult[key].value
    : hit[key];
};

export default function formatAlgoliaResults(hit) {
  const id = hit.objectID;
  const by = matchResultOrDefault(hit, 'author');
  const title = matchResultOrDefault(hit, 'title');
  const url = hit.url
  const time = hit.created_at_i;
  const score = hit.points;
  const kids = hit.num_comments && range(hit.num_comments);

  return { id, by, title, url, time, score, kids };
};

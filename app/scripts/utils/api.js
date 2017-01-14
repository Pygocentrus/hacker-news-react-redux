const responseHandler = (dispatch, action, optionalData) => (err, data) =>
  dispatch({ type: `${action}_${!!err ? 'ERROR' : 'SUCCESS'}`, optionalData, data: data || err });

export const getGenerator = store => (url, action, optionalData = {}) => {
  const handler = responseHandler(store.dispatch, action, optionalData);
  fetch(url)
    .then((response) => {
      if (response.status === 200) {
        response
          .json()
          .then(data => handler(null, data));
      } else {
        const { status, statusText } = response;
        handler({ status, statusText });
      }
    })
    .catch(handler);
};

export const batchGenerator = store => (urls, action, optionalData = {}) => {
  const reqs = urls.map(url =>
    fetch(url)
      .then(res => res.status === 200 && res.json())
  );

  Promise
    .all(reqs)
    .then(data => store.dispatch({ type: `${action}_SUCCESS`, optionalData, data }))
    .catch(err => store.dispatch({ type: `${action}_ERROR`, optionalData, data: err }));
};

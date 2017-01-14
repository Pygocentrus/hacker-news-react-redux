const responseHandler = (dispatch, action, optionalData) => (err, data) =>
  dispatch({ type: `${action}_${!!err ? 'ERROR' : 'SUCCESS'}`, optionalData, data: data || err });

export const getGenerator = store => (url, action, optionalData = {}) => {
  const handler = responseHandler(store.dispatch, action, optionalData);
  fetch(url)
    .then((response) => {
      // TODO: Handle 300/400/500 status
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

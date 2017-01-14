export default function domainFromUrl(url) {
  const domain = url.indexOf("://") > -1
    ? url.split('/')[2]
    : url.split('/')[0];
  return domain.split(':')[0];
};

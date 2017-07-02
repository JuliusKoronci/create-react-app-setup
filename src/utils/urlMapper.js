export const mapToQueryString = (json: {} = {}, prepend: string = '') => {
  const query = [];
  const keys = Object.keys(json);
  keys.forEach((key) => {
    const value = json[key];
    if (value && value !== '') {
      query.push(`${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`);
    }
  });
  return `${query.length > 0 ? prepend : ''}${query.join('&')}`;
};

export const pathToParams = (path: string, params: {} = {}) => {
  let mappedPath = path;
  if (Object.keys(params).length !== 0) {
    const keys = Object.keys(params);
    keys.forEach((key) => {
      const replace = `:${key}`;
      mappedPath = mappedPath.replace(replace, params[key]);
    });
  }

  return mappedPath;
};

export default (jsonObject: {}) => {
  // eslint-disable-next-line no-undef
  const data = new FormData();
  const keys = Object.keys(jsonObject);
  keys.forEach((key) => {
    data.append(key, jsonObject[key]);
  });

  return data;
};

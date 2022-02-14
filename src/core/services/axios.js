import axios from 'axios';

export const getData = async (url) => {
  const options = { url: url,
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
    } };

  return axios(options);
};

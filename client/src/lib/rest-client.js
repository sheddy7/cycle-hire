require('es6-promise').polyfill();
require('isomorphic-fetch');

const defaultHeaders = {
  'Content-Type': 'application/json'
};

export const getJson = (url, headers = {}) => {

  return fetch(url, {
    headers: {
      ...defaultHeaders,
      ...headers
    }
  }).then(resp => resp.json());
};

export const post = (url, body = '', headers = {}) => {
  if (typeof body === 'object') {
    body = JSON.stringify(body);
  }

  return fetch(url, {
    headers: {
      ...defaultHeaders,
      ...headers
    },
    method: 'POST',
    body
  });
};

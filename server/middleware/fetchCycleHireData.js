require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = 'http://cyclehire.eu/cycleHire.json';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

export const fetchCycleHireData = (req, res, next) => {

  fetch(url, defaultHeaders)
  .then(resp => resp.json())
  .then(resp => {
    res.send(resp);
  });

};

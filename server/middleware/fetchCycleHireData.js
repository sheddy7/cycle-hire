require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = 'http://cyclehire.eu/cycleHire.json';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const filterBikeStations = (data) => ({
  data: data.stations.slice(0, 10)
});

export const fetchCycleHireData = (req, res, next) => {

  fetch(url, defaultHeaders)
  .then(resp => resp.json())
  .then(resp => res.send(filterBikeStations(resp)));

};

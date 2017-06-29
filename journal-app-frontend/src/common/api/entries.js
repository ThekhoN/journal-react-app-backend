const url = 'http://localhost:3091/';
import {polyfill} from 'es6-promise';
import 'isomorphic-fetch';
polyfill();

export const fetchEntries = callback => {
  return fetch(url)
    .then(res => res.json())
    .then(entries => {
      // return count[0].count;
      callback(entries);
    })
    .catch(err => { console.log('error in fetchEntries: ', err); });
};

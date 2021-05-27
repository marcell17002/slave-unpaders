import axios from 'axios';
import {BASE_URL} from '@env';

const post = (path, data, config) => {
  var error;
  const promise = new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/${path}`, data, config).then(
      result => {
        resolve(result.data);
      },
      err => {
        // if (err.response) {
        //   error = JSON.parse(err.response.request._response);
        //   reject(error);
        // }
        reject(err);
      },
    );
  });

  return promise;
};

export default post;

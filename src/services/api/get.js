import axios from 'axios';
import {BASE_URL} from '@env';

const get = (path, config) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/${path}`, config).then(
      result => {
        resolve(result.data);
      },
      err => {
        reject(err);
      },
    );
  });

  return promise;
};

export default get;

import Config from './config';

const get = (prefix, id) => {
  return Config.database().ref(`/${prefix}/${id}`).once('value');
};

export default get;

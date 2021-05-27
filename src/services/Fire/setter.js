import Config from './config';

const setter = (prefix, id, payload) => {
  Config.database()
    .ref(`/${prefix}/${id}`)
    .set(payload)
    .then(() => console.log('Token successfully set'));
};

export default setter;

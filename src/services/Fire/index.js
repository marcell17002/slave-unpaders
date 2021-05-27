import getter from './getter';
import setter from './setter';

const getToken = id => getter('users', id);
const setToken = (id, payload) => setter('users', id, payload);

export const Fire = {
  getToken,
  setToken,
};

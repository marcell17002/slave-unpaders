import {createStore} from 'redux';

const initialState = {
  loading: false,
  user: {
    id: '',
    email: '',
    name: '',
    status: '',
    token: '',
    refreshToken: '',
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_PROFILE') {
    return {
      ...state,
      user: action.value,
    };
  } else if (action.type === 'SET_TOKEN') {
    return {
      ...state,
      user: {
        ...state.user,
        token: action.value,
      },
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;

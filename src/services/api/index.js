import get from './get';
import post from './post';
import put from './put';
import drop from './drop';
import config from './config';
import {destroyData, getData, updateToken} from '../../utils';
import {BASE_URL} from '@env';
import axios from 'axios';
import {goToLogin} from '../../router/helpers';
import {useSelector, useDispatch} from 'react-redux';
//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const data = await getData('user').then(res => {
      if (res) {
        return res;
      }
    });
    if (error.response.status === 401) {
      NavigationService.navigate('Login');
      console.log('401 navigate to login');
      await destroyData();
    }
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('FLAG REFRSH TOKEN');
      return axios
        .post(`${BASE_URL}/refreshToken`, {
          email: data.email,
          refreshToken: data.refreshToken,
        })
        .then(async response => {
          const newToken = response.data.data.token;
          const dispatch = useDispatch();
          console.log('token baru :', newToken);
          if (response.status === 200) {
            await updateToken('user', newToken);
            // await dispatch('SET_PROFILE',newToken);
          }
          console.log('Access token refreshed!');
          originalRequest.headers.Authorization = 'Bearer ' + newToken;
          return axios(originalRequest);
        })
        .catch(function (error) {
          console.log(
            'There has been a problem with your fetch operation: ' +
              error.message,
          );
          throw error;
        });
    }
    return Promise.reject(error);
  },
);

//get
const getEvent = () => get('event', null);
const getUserByCategory = (variable, value) =>
  get(`user/${variable}/${value}`, null);
const getProfileUser = async id =>
  get(`user/_id/${id}`, await config.withToken());
const getProfileCategory = async (variable, value) =>
  get(`user/${variable}/${value}`, await config.withToken());
const getLikedEvent = async (variable, id) =>
  get(`likedEvent/${variable}/${id}`, await config.withToken());
const getHistoryChat = async (variable, value) =>
  get(`historyChat/${variable}/${value}`, await config.withToken());

//post
const postRegister = data => post('user/register', data, null);
const postLogIn = data => post('user/login', data, null);
const postLikedEvent = data => post('likedEvent', data, null);
const postNotifications = async data => post('pushNotifications', data);
const postEvent = async data => post('event', data, await config.withToken());

//put
const updateLikedEvent = async (data, id) =>
  put(`likedEvent/${id}`, data, null);
const updateProfileUser = async (data, id) =>
  put(`user/${id}`, data, await config.withToken());

//delete
const deleteLikedEvent = async id =>
  drop(`likedEvent/${id}`, await config.withToken());

export const api = {
  getEvent,
  getUserByCategory,
  getLikedEvent,
  getProfileUser,
  getProfileCategory,
  getHistoryChat,

  postRegister,
  postLogIn,
  postLikedEvent,
  postNotifications,
  postEvent,

  updateLikedEvent,
  updateProfileUser,

  deleteLikedEvent,
};

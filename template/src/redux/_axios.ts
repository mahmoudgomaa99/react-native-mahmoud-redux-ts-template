import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {TStore} from './store';
import assign from 'lodash/assign';
import env from '../../.env.json';
// import {BASE_URL as bu} from 'react-native-dotenv';

export type TTokenKeys = {
  [K in TokenKeys]: any;
};

export enum TokenKeys {
  TOKEN = 'token',
}

const initAxios = (store: TStore) => {
  const injectAuthHeaders = (config: AxiosRequestConfig) => {
    const tokens = store.getState().tokens;
    const authorization = `Bearer ${tokens[TokenKeys.TOKEN]}`;
    const authHeaders = {authorization};
    assign(config.headers, authHeaders);
    return config;
  };

  const unautherizedHandling = (error: AxiosError) => {
    const {status, data} = (error?.response as any) || {};
    //error handling
  };

  const handleFormData = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        'Content-Type': 'multipart/form-data',
      });
    }
    return config;
  };

  axios.defaults.baseURL = env.BASE_URL;
  axios.interceptors.request.use(injectAuthHeaders);
  axios.interceptors.response.use(undefined, error => {
    unautherizedHandling(error);
    return Promise.reject(error?.response);
  });
  axios.interceptors.request.use(handleFormData);
};

export default initAxios;

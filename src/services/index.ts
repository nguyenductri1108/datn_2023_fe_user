const BE_ENDPOINT = 'http://localhost:1108/api';

import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

export const axiosGet = (
  path = '',
  params = {},
  customConfig: AxiosRequestConfig = {},
) => {
  let result = axios
    .get(`${BE_ENDPOINT}/${path}`, {
      ...customConfig,
      params: params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    .then(response => response.data);
  return result;
};

export const axiosPost = (
  path = '',
  body = {},
  customConfig = {},
  uploadFunc = () => {},
) => {
  let result = axios.post(`${BE_ENDPOINT}/${path}`, body, {
    ...customConfig,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      // "Content-Type": "application/json"
    },
    onUploadProgress: uploadFunc,
  });

  return result;
};

export const axiosDelete = (
  path = '',
  customConfig = {},
  uploadFunc = () => {},
) => {
  let result = axios.delete(`${BE_ENDPOINT}/${path}`, {
    ...customConfig,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      // "Content-Type": "application/json"
    },
    onUploadProgress: uploadFunc,
  });

  return result;
};

const BE_ENDPOINT = 'http://localhost:1108/api';

import axios from 'axios';
import { toast } from 'react-toastify';

export const axiosGet = (path = '', params = {}) => {
  let result = axios
    .get(`${BE_ENDPOINT}/${path}`, {
      params: params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    .then(response => response.data);
  return result;
};

export const axiosPost = (path = '', body = {}, uploadFunc = () => {}) => {
  let result = axios
    .post(`${BE_ENDPOINT}/${path}`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        // "Content-Type": "application/json"
      },
      onUploadProgress: uploadFunc,
    })
    .then(response => {
      console.log(response);
    });

  return result;
};

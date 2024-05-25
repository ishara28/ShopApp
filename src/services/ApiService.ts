import axios from 'axios';

export const AxiosInstance = axios.create({
  timeout: 12000,
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export const api = async (
  route: string,
  method: string,
  params: object,
  data: object,
) => {
  let configObj: object = {
    url: route,
    method: method,
  };
  if (params) {
    configObj = {...configObj, params: params};
  } else if (data) {
    configObj = {...configObj, data: data};
  }
  return await AxiosInstance(configObj)
    .then(response => response)
    .catch(error => error);
};

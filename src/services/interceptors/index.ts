import axios from 'axios';

const getSomethingInterceptor = (request) => {
  const tmpResponse = request;

  // here you can modify the data
  return tmpResponse;
};

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (request) => {
      if (request.config.url?.includes('&something=1')) {
        return getSomethingInterceptor(request);
      }

      return request;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
};

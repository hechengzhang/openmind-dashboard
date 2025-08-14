import axios, { AxiosError, AxiosResponse } from "axios";

// interceptors
axios.interceptors.response.use((response: AxiosResponse) => response,
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.use((config) => {
  if (!config.headers['Content-Type']) {
    config.headers["Content-Type"] = "application/json";
  }
  config.baseURL = import.meta.env.VITE_API_URL
  config.timeout = 30000;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export interface GetAxiosParams {
  url: string,
  params?: any,
  headers?: any,
}

export interface PostAxiosParams {
  url: string,
  data?: any,
  headers?: any,
}

type CommonAxiosParams = { token: string };

export const getAxios = async ({ url, params = {}, headers = {}, token }: GetAxiosParams & CommonAxiosParams) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers
      }
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.response?.data || '');
    });
  }) as Promise<any>
}

export const postAxios = async ({ url, data = {}, headers = {}, token }: PostAxiosParams & CommonAxiosParams) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "post",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers
      }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        console.error(`POST request to ${url} failed:`, error.response || error);
        reject(error.response?.data || 'An error occurred during the request.');
      });
  });
};

export default axios;

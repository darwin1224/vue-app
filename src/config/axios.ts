import { AxiosRequestConfig } from 'axios';

/**
 * Axios configurations
 *
 * @type {AxiosRequestConfig | undefined}
 */
export const config: AxiosRequestConfig | undefined = {
  headers: {
    Authorization: localStorage.getItem('API_TOKEN')
  }
};

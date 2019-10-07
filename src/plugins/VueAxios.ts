import _Vue from 'vue';
import axios from 'axios';

/**
 * Axios baseURL
 *
 * @type {string}
 */
axios.defaults.baseURL = 'http://localhost:3000';

export default {
  /**
   * Axios plugin
   *
   * @param {_Vue} Vue
   * @param {any} options
   * @returns {void}
   */
  install(Vue: typeof _Vue, options?: any): void {
    Vue.prototype.$http = axios;
  }
};

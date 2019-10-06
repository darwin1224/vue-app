import _Vue from 'vue';
import Axios from 'axios';

export function VueAxios(Vue: typeof _Vue, options?: any): void {
  Vue.prototype.$http = Axios;
}

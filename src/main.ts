import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './routers';
import store from './stores';
import './registerServiceWorker';
import { VueAxios } from '@/plugins/VueAxios';

Vue.config.productionTip = false;

Vue.use(VueAxios);

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

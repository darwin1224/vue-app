import Vue from 'vue';
import Vuex from 'vuex';

import Post from '@/stores/modules/Post';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Post
  }
});

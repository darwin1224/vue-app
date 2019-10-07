import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/types/stores';
import Auth from '@/stores/modules/Auth';
import Post from '@/stores/modules/Post';

Vue.use(Vuex);

/**
 * Root store
 *
 * @type {StoreOptions<RootState>}
 */
const store: StoreOptions<RootState> = {
  modules: {
    Auth,
    Post
  }
};

export default new Vuex.Store<RootState>(store);

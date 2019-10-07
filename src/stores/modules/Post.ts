import _Vue from 'vue';
import { ActionTree, GetterTree, MutationTree, Module, ActionContext } from 'vuex';
import { PostState, RootState } from '@/types/stores';
import { PostModel } from '@/types/models';
import { GET_POST } from '../getter-types';
import { SET_POST, SET_POST_BY_ID } from '../mutation-types';
import { getAllPost, getPostById } from '../action-types';

/**
 * State lists
 *
 * @type {PostState}
 */
const state: PostState = {
  /**
   * Post list
   *
   * @type {PostModel[]}
   */
  list: []
};

/**
 * Getter lists
 *
 * @type {GetterTree<PostState, RootState>}
 */
const getters: GetterTree<PostState, RootState> = {
  /**
   * Get the post list
   *
   * @param {PostState} state
   * @returns {PostModel[] | undefined}
   */
  [GET_POST]: (state: PostState): PostModel[] | undefined => state.list
};

/**
 * Mutation lists
 *
 * @type {MutationTree<PostState>}
 */
const mutations: MutationTree<PostState> = {
  /**
   * Set the payload to the post list
   *
   * @param {PostState} state
   * @param {PostModel[]} payload
   * @returns {PostModel[]}
   */
  [SET_POST]: (state: PostState, payload: PostModel[]): PostModel[] => {
    return (state.list = payload);
  },

  /**
   * Set the payload the post list by id
   *
   * @param {PostState} state
   * @param {PostModel[]} payload
   * @returns {PostModel[]}
   */
  [SET_POST_BY_ID]: (state: PostState, payload: PostModel[]): PostModel[] => {
    return (state.list = payload);
  }
};

/**
 * Action lists
 *
 * @type {ActionTree<PostState, RootState>}
 */
const actions: ActionTree<PostState, RootState> = {
  /**
   * Get all post data
   *
   * @param {ActionContext<PostState, RootState>} context.commit
   * @returns {Promise<PostModel>}
   */
  async [getAllPost]({ commit }: ActionContext<PostState, RootState>, vm: _Vue): Promise<PostModel> {
    try {
      const { data } = await vm.$http.get('/post', {
        headers: {
          Authorization: localStorage.getItem('API_TOKEN')
        }
      });
      commit('SET_POST', data);
      return data;
    } catch (err) {
      return err;
    }
  },

  /**
   * Get post data by id
   *
   * @param {ActionContext<PostState, RootState>} context.commit
   * @returns {Promise<PostModel>}
   */
  async [getPostById]({ commit }: ActionContext<PostState, RootState>, vm: _Vue): Promise<PostModel> {
    try {
      const { data } = await vm.$http.get('/post/1');
      commit('SET_POST_BY_ID', data);
      return data;
    } catch (err) {
      return err;
    }
  }
};

/**
 * Namespaced state
 *
 * @type {boolean}
 */
const namespaced: boolean = true;

/**
 * Post module
 *
 * @type {Module<PostState, RootState>}
 */
const post: Module<PostState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};

export default post;

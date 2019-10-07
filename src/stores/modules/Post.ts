import axios from 'axios';
import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';
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
   * @returns {any}
   */
  [GET_POST]: (state: PostState): any => state.list
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
   * @param {any} payload
   * @returns {any}
   */
  [SET_POST]: (state: PostState, payload: any): any => {
    return (state.list = payload);
  },

  /**
   * Set the payload the post list by id
   *
   * @param {PostState} state
   * @param {any} payload
   * @returns {any}
   */
  [SET_POST_BY_ID]: (state: PostState, payload: any): any => {
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
   * @param {any} context.commit
   * @returns {Promise<PostModel>}
   */
  async [getAllPost]({ commit }: any): Promise<PostModel> {
    try {
      const { data } = await axios.get('http://localhost:3000/post');
      commit('SET_POST', data);
      return data;
    } catch (err) {
      return err;
    }
  },

  /**
   * Get post data by id
   *
   * @param {any} context.commit
   * @returns {Promise<PostModel>}
   */
  async [getPostById]({ commit }: any): Promise<PostModel> {
    try {
      const { data } = await axios.get('http://localhost:3000/post/1');
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

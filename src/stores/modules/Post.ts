import _Vue from 'vue';
import vm from '@/main';
import { ActionTree, GetterTree, MutationTree, Module, ActionContext } from 'vuex';
import { PostState, RootState, GetById, UpdateById } from '@/types/stores';
import { PostModel, ObjectId } from '@/types/models';
import { GET_POST, GET_POST_BY_ID } from '../getter-types';
import { SET_POST, SET_POST_BY_ID, INSERT_PORT, DELETE_POST, UPDATE_POST } from '../mutation-types';
import { getAllPost, getPostById, insertPost, deletePost, updatePost } from '../action-types';
import { config } from '@/config/axios';

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
  list: [],

  /**
   * Post list by id
   *
   * @type {PostModel}
   */
  listById: {}
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
   * @returns {PostModel[]}
   */
  [GET_POST]: (state: PostState): PostModel[] => state.list,

  /**
   * Get the post list by id
   *
   * @param {PostState} state
   * @returns {PostModel}
   */
  [GET_POST_BY_ID]: (state: PostState): PostModel => state.listById
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
   * Set the payload to the post list by id
   *
   * @param {PostState} state
   * @param {PostModel} payload
   * @returns {PostModel}
   */
  [SET_POST_BY_ID]: (state: PostState, payload: PostModel): PostModel => {
    return (state.listById = payload);
  },

  /**
   * Insert the payload to the post list
   *
   * @param {PostState} state
   * @param {PostModel} payload
   * @returns {PostModel[]}
   */
  [INSERT_PORT]: (state: PostState, payload: PostModel): PostModel[] => {
    return (state.list = state.list.concat(payload));
  },

  /**
   * Update the post list according to the payload given
   *
   * @param {PostState} state
   * @param {PostModel} payload
   * @returns {PostModel[] | undefined}
   */
  [UPDATE_POST]: (state: PostState, payload: PostModel): PostModel[] | undefined => {
    const index = state.list.findIndex(index => index._id === payload._id);
    if (index !== 1) {
      return state.list.splice(index, 1, payload);
    }
  },

  /**
   * Delete according the id given from the post list
   *
   * @param {PostState} state
   * @param {ObjectId} id
   * @returns {PostModel[]}
   */
  [DELETE_POST]: (state: PostState, id: ObjectId): PostModel[] => {
    return (state.list = state.list.filter(item => {
      return item._id !== id;
    }));
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
   * @param {_Vue} vm
   * @returns {Promise<PostModel>}
   */
  async [getAllPost]({ commit }: ActionContext<PostState, RootState>, vm: _Vue): Promise<PostModel> {
    try {
      const { data } = await vm.$http.get('/post', config);
      commit(SET_POST, data);
      return data;
    } catch (err) {
      return err;
    }
  },

  /**
   * Get post data by id
   *
   * @param {ActionContext<PostState, RootState>} context.commit
   * @param {GetById} payload.id
   * @param {GetById} payload.vm
   * @returns {Promise<PostModel>}
   */
  async [getPostById]({ commit }: ActionContext<PostState, RootState>, { id, vm }: GetById): Promise<PostModel> {
    try {
      const { data } = await vm.$http.get(`/post/${id}`, config);
      commit(SET_POST_BY_ID, data);
      return data;
    } catch (err) {
      return err;
    }
  },

  /**
   * Insert data
   *
   * @param {ActionContext<PostState, RootState>} context.commit
   * @param {PostModel} payload
   * @returns {Promise<PostModel>}
   */
  async [insertPost]({ commit }: ActionContext<PostState, RootState>, payload: PostModel): Promise<PostModel> {
    try {
      const { data } = await vm.$http.post('/post', payload, config);
      commit(INSERT_PORT, data);
      return data;
    } catch (err) {
      return err;
    }
  },

  /**
   * Update data by id
   *
   * @param {ActionContext<PostState, RootState>} context.commit
   * @param {UpdateById} payload.id
   * @param {UpdateById} payload.params
   * @returns {Promise<PostModel>}
   */
  async [updatePost]({ commit }: ActionContext<PostState, RootState>, { id, params }: UpdateById): Promise<PostModel> {
    try {
      const { data } = await vm.$http.put(`/post/${id}`, params, config);
      commit(UPDATE_POST, data);
      return data;
    } catch (err) {
      return err;
    }
  },

  /**
   * Delete data by id
   *
   * @param {ActionContext<PostState, RootState>} context.commit
   * @param {ObjectId} id
   * @returns {Promise<PostModel>}
   */
  async [deletePost]({ commit }: ActionContext<PostState, RootState>, id: ObjectId): Promise<PostModel> {
    try {
      const { data } = await vm.$http.delete(`/post/${id}`, config);
      commit(DELETE_POST, id);
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

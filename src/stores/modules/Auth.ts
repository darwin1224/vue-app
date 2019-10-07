import axios from 'axios';
import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';
import { AuthState, RootState } from '@/types/stores';
import { AuthModel } from '@/types/models';
import { login, register } from '../action-types';

/**
 * State lists
 *
 * @type {AuthState}
 */
const state: AuthState = {
  /**
   * Auth list
   *
   * @type {AuthModel}
   */
  auth: {
    username: '',
    password: ''
  }
};

/**
 * Mutation lists
 *
 * @type {MutationTree<AuthState>}
 */
const mutations: MutationTree<AuthState> = {};

/**
 * Action lists
 *
 * @type {ActionTree<AuthState, RootState>}
 */
const actions: ActionTree<AuthState, RootState> = {
  /**
   * Login the user
   *
   * @param {any} context.commit
   * @param {AuthModel} payload
   * @returns {Promise<void>}
   */
  async [login]({ commit }: any, payload: AuthModel): Promise<void> {
    const { data } = await axios.post(
      'http://localhost:3000/auth/login',
      payload
    );
    return data;
  },

  /**
   * Register the user
   *
   * @param {any} context.commit
   * @param {AuthModel} payload
   * @returns {Promise<void>}
   */
  async [register]({ commit }: any, payload: AuthModel): Promise<void> {
    const { data } = await axios.post(
      'http://localhost:3000/auth/register',
      payload
    );
    return data;
  }
};

/**
 * Namespaced state
 *
 * @type {boolean}
 */
const namespaced: boolean = true;

/**
 * Auth module
 *
 * @type {Module<AuthState, RootState>}
 */
const Auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  mutations,
  actions
};

export default Auth;

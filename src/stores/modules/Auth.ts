import vm from '@/main';
import { ActionTree, MutationTree, Module, ActionContext } from 'vuex';
import { AuthState, RootState } from '@/types/stores';
import { AuthModel, Token } from '@/types/models';
import { login, register } from '../action-types';
import { SET_TOKEN } from '../mutation-types';

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
  },

  /**
   * API token
   *
   * @type {string}
   */
  token: localStorage.getItem('API_TOKEN') || undefined
};

/**
 * Mutation lists
 *
 * @type {MutationTree<AuthState>}
 */
const mutations: MutationTree<AuthState> = {
  /**
   * Set the token from api
   *
   * @param {AuthState} state
   * @param {string} payload
   * @returns {string | undefined}
   */
  [SET_TOKEN]: (state: AuthState, payload?: string): string | undefined => {
    return (state.token = payload);
  }
};

/**
 * Action lists
 *
 * @type {ActionTree<AuthState, RootState>}
 */
const actions: ActionTree<AuthState, RootState> = {
  /**
   * Login the user
   *
   * @param {ActionContext<AuthState, RootState>} context.commit
   * @param {AuthModel} payload
   * @returns {Promise<Token>}
   */
  async [login]({ commit }: ActionContext<AuthState, RootState>, payload: AuthModel): Promise<Token> {
    try {
      const { data } = await vm.$http.post('/auth/login', payload);
      localStorage.setItem('API_TOKEN', data.token);
      commit(SET_TOKEN, data.token);
      return data;
    } catch (err) {
      return err;
    }
  },

  /**
   * Register the user
   *
   * @param {ActionContext<AuthState, RootState>} context.commit
   * @param {AuthModel} payload
   * @returns {Promise<AuthModel>}
   */
  async [register]({ commit }: ActionContext<AuthState, RootState>, payload: AuthModel): Promise<AuthModel> {
    try {
      const { data } = await vm.$http.post('/auth/register', payload);
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

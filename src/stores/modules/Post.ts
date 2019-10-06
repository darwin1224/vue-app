import vm from '@/main';

/**
 * State lists
 */
const state = {
  list: []
};

/**
 * Getter lists
 */
const getters = {
  GET_POST: (state: any): void => state.list
};

/**
 * Mutation lists
 */
const mutations = {
  SET_POST: (state: any, payload: any): void => (state.list = payload)
};

/**
 * Action lists
 */
const actions = {
  async getAllPost({ commit }: any): Promise<void> {
    const { data } = await this.$http.get('http://localhost:3000/post', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1NzAzNjYxNjIsImV4cCI6MTU3MDM2OTc2Mn0.-59d3si_WT6SIuOap3F_Ez8OT0P2ul1NDidaN39WoxM'
      }
    });
    commit('SET_POST', data);
    return data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

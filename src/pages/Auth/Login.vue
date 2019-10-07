<template>
  <div>
    <form @submit.prevent="onLogin">
      <input type="text" v-model="login.username" placeholder="Enter Username" />
      <input type="password" v-model="login.password" placeholder="Enter Password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AuthModel } from '@/types/models';
import { Dispatch } from 'vuex';

@Component
export default class Login extends Vue {
  /**
   * Login states
   *
   * @type {AuthModel}
   */
  private login: AuthModel = {
    username: '',
    password: ''
  };

  /**
   * Process login
   *
   * @returns {Promise<Dispatch>}
   */
  public async onLogin(): Promise<Dispatch> {
    try {
      return await this.$store.dispatch('Auth/login', { ...this.login });
    } catch (err) {
      throw new Error(err);
    }
  }
}
</script>

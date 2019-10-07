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
   * @returns {Promise<void>}
   */
  public async onLogin(): Promise<void> {
    try {
      await this.$store.dispatch('Auth/login', { ...this.login });
      this.$router.push({ name: 'PostList' });
    } catch (err) {
      throw new Error(err);
    }
  }
}
</script>

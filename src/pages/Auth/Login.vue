<template>
  <div>
    <b-form @submit.prevent="onLogin">
      <b-form-group>
        <b-form-input v-model="login.username" required placeholder="Enter Username"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="login.password" required placeholder="Enter Password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Sign In</b-button>
    </b-form>
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

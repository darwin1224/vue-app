<template>
  <div>
    <form @submit.prevent="onLogin">
      <input type="text" v-model="auth.username" placeholder="Enter Username" />
      <input
        type="password"
        v-model="auth.password"
        placeholder="Enter Password"
      />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AuthModel } from '@/types/models';

@Component
export default class Login extends Vue {
  private auth: AuthModel = {
    username: '',
    password: ''
  };

  /**
   * Process login
   *
   * @returns {Promise<void>}
   */
  public async onLogin(): Promise<void> {
    const { data } = await this.$http.post('http://localhost:3000/auth/login', {
      ...this.auth
    });
    console.log(data);
  }
}
</script>

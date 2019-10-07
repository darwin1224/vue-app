<template>
  <div>
    <form @submit.prevent="onRegister">
      <input type="text" v-model="register.name" placeholder="Enter Name" />
      <input
        type="text"
        v-model="register.username"
        placeholder="Enter Username"
      />
      <input
        type="password"
        v-model="register.password"
        placeholder="Enter Password"
      />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AuthModel } from '../../types/models';

@Component
export default class Register extends Vue {
  private register: AuthModel = {
    name: '',
    username: '',
    password: ''
  };

  public async onRegister(): Promise<void> {
    const { data } = await this.$http.post(
      'http://localhost:3000/auth/register',
      { ...this.register }
    );
    console.log(data);
  }
}
</script>

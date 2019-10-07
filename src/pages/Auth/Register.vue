<template>
  <div>
    <form @submit.prevent="onRegister">
      <input type="text" v-model="register.name" placeholder="Enter Name" />
      <input type="text" v-model="register.username" placeholder="Enter Username" />
      <input type="password" v-model="register.password" placeholder="Enter Password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AuthModel } from '../../types/models';
import { Dispatch } from 'vuex';

@Component
export default class Register extends Vue {
  /**
   * Register states
   *
   * @type {AuthModel}
   */
  private register: AuthModel = {
    name: '',
    username: '',
    password: ''
  };

  /**
   * Register the user
   *
   * @returns {Promise<Dispatch>}
   */
  public async onRegister(): Promise<Dispatch> {
    try {
      return await this.$store.dispatch('Auth/register', { ...this.register });
    } catch (err) {
      throw new Error(err);
    }
  }
}
</script>

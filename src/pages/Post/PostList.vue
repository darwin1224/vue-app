<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PostList extends Vue {
  private message: string = 'Hello World';

  /**
   * Post state
   *
   * @returns {any}
   */
  public get posts(): any {
    return this.$store.getters['Post/GET_POST'];
  }

  /**
   * Created component hooks
   *
   * @returns {Promise<void>}
   */
  public async created(): Promise<void> {
    await this.getAll();
  }

  /**
   * Get all data
   *
   * @returns {Promise<void>}
   */
  public async getAll(): Promise<void> {
    try {
      const data = await this.$store.dispatch('Post/getAllPost');
      console.log(data);
    } catch (err) {
      throw new Error(err);
    }
  }
}
</script>

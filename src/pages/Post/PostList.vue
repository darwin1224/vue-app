<template>
  <div>
    <b-table striped hover :items="posts"></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Dispatch } from 'vuex';

@Component
export default class PostList extends Vue {
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
   * @returns {Promise<Dispatch>}
   */
  public async getAll(): Promise<Dispatch> {
    try {
      return await this.$store.dispatch('Post/getAllPost', this);
    } catch (err) {
      throw new Error(err);
    }
  }
}
</script>

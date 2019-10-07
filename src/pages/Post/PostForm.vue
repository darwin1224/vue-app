<template>
  <div>
    <form @submit.prevent="onSubmit" autocomplete="off">
      <input type="text" v-model="post.title" placeholder="Enter Title" />
      <textarea v-model="post.body"></textarea>
      <input type="submit" value="Save" />
      <b-button variant="light" size="small" @click="goBack">Back</b-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PostModel } from '../../types/models';

@Component
export default class PostForm extends Vue {
  /**
   * Post states
   */
  private post: PostModel = {
    title: '',
    body: ''
  };

  /**
   * Save the post data
   *
   * @returns {Promise<void>}
   */
  public async onSubmit(): Promise<void> {
    try {
      await this.$store.dispatch('Post/insertPost', { ...this.post });
      this.$router.push({ name: 'PostList' });
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Go back to the previous page
   *
   * @returns {void}
   */
  public goBack(): void {
    this.$router.back();
  }
}
</script>

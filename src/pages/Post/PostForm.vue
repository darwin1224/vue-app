<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group>
        <b-form-input v-model="post.title" required placeholder="Enter Title"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="post.body" required placeholder="Enter Body"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="mr-2">Save</b-button>
      <b-button variant="light" @click="goBack">Back</b-button>
    </b-form>
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

<style lang="scss" scoped>
$btn-light-border-color: #a5a5a5;

.btn-light {
  border: 1px solid $btn-light-border-color;
}
</style>

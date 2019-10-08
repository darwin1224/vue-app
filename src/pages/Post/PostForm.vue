<template>
  <div>
    <b-form @submit.prevent="onInsert">
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
import { PostModel, ObjectId } from '../../types/models';

@Component
export default class PostForm extends Vue {
  /**
   * Is the form is in editing mode or not
   *
   * @type {boolean}
   */
  private isEditing: boolean = false;

  /**
   * Post states
   */
  private post: PostModel = {
    title: '',
    body: ''
  };

  /**
   * Check if will insert or update data according to the route params
   *
   * @returns {any}
   */
  private get insertOrUpdate(): any {
    return this.isEditing === false ? this.onInsert() : this.onUpdate();
  }

  /**
   * Created vue lifecycle hook
   *
   * @returns {Promise<void>}
   */
  public async created(): Promise<void> {
    if (this.$route.name === 'PostEdit') {
      this.isEditing = true;
      await this.getById(this.$route.params.id);
    }
  }

  /**
   * Get data by id
   *
   * @param {ObjectId} id
   * @returns {Promise<void>}
   */
  protected async getById(id: ObjectId): Promise<void> {
    const data = await this.$store.dispatch('Post/getPostById', { id, vm: this });
    this.post.title = data.title;
    this.post.body = data.body;
  }

  /**
   * Save the post data
   *
   * @returns {Promise<void>}
   */
  public async onInsert(): Promise<void> {
    try {
      await this.$store.dispatch('Post/insertPost', { ...this.post });
      this.$router.push({ name: 'PostList' });
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Update the post data by id
   *
   * @returns {Promise<void>}
   */
  public async onUpdate(): Promise<void> {
    try {
      await this.$store.dispatch('Post/updatePost', { id: this.$route.params.id, params: this.post });
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

<template>
  <div>
    <b-button variant="primary" size="small" class="mb-4" @click="goToForm">Add Post</b-button>
    <b-table striped hover :fields="fields" :items="posts">
      <template v-slot:cell(actions)="row">
        <b-button variant="warning" size="small" class="mr-2" @click="goToForm">Edit</b-button>
        <b-button variant="danger" size="small" @click="onDelete(row.item._id)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Dispatch } from 'vuex';
import { IBaseTable } from '@/types/base-table';
import { ObjectId } from '@/types/models';

@Component
export default class PostList extends Vue {
  /**
   * Table fields
   *
   * @type {IBaseTable[]}
   */
  public fields: IBaseTable[] = [
    { key: '_id', label: 'No.' },
    { key: 'title', label: 'Title' },
    { key: 'body', label: 'Body' },
    { key: 'actions', label: 'Actions' }
  ];

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
    if (!this.$store.state.Post.list.length) {
      await this.getAll();
    }
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

  /**
   * Go to form page
   *
   * @returns {void}
   */
  public goToForm(): void {
    this.$router.push({ name: 'PostForm' });
  }

  /**
   * Delete data by id
   *
   * @param {ObjectId} id
   * @returns {Promise<void>}
   */
  public async onDelete(id: ObjectId): Promise<void> {
    if (confirm('Are you sure you want to delete this data?')) {
      try {
        await this.$store.dispatch('Post/deletePost', id);
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}
</script>

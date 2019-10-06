<template>
  <div>
    <navbar />
    <h1>Hello World</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/layouts/Navbar.vue';
import { Post } from '@/types/Post';

@Component({
  /**
   * Parent components
   */
  components: {
    Navbar
  }
})
export default class App extends Vue {
  /**
   * Post state
   */
  public get posts() {
    return this.$store.state.Post.list;
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
    // const { data } = await this.$http.get('http://localhost:3000/post');
    const data = await this.$store.dispatch('Post/getAllPost');
    console.log(data);
  }
}
</script>

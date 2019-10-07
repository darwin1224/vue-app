<template>
  <div>
    <navbar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/layouts/Navbar.vue';

@Component({
  /**
   * Parent components
   */
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

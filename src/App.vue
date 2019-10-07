<template>
  <div>
    <navbar />
    <router-view />
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

<template>
  <div>
    <b-navbar type="light" variant="light" class="mb-4 shadow">
      <b-container>
        <b-navbar-nav>
          <b-nav-item href="#">Posts</b-nav-item>
          <b-nav-item href="#">Articles</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {}
</script>

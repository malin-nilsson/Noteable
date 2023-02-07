<script setup lang="ts">
import Navbar from '@/components/Layout/Navbar.vue'
</script>

<template>
  <Navbar />
  <!-- <RouterLink to="/" class="button">Notes</RouterLink> | 
  <RouterLink to="/stats" class="button">Stats</RouterLink> -->
<div class="container is-max-desktop px-2 py-4">
  <RouterView/>
</div>

</template>

<style>
@import 'bulma/css/bulma.min.css';


</style>

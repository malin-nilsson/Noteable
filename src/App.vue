<script setup lang="ts">
import Navbar from '@/components/Layout/Navbar.vue'
import { onMounted } from 'vue'
import { useStoreAuth } from './stores/storeAuth'

const storeAuth = useStoreAuth()

onMounted(() => {
  storeAuth.init()
})
</script>

<template>
  <Navbar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

/*
mobile nav 
*/
const showMobileNav = ref(false)

</script>

<template>
 <nav 
 class="navbar is-light" 
 role="navigation" 
 aria-label="main navigation">
  <div class="container is-max-desktop"> 
  <div class="navbar-brand">
    <div 
    class="navbar-item is-size-4 is-family-sans-serif">
     Noteable
    </div>

    <a 
    @click.prevent="showMobileNav = !showMobileNav"
    role="button" 
    class="navbar-burger"
    :class="{'is-active' : showMobileNav}" 
    aria-label="menu" 
    aria-expanded="false" 
    data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div 
  id="navbarBasicExample" 
  class="navbar-menu"
  :class="{'is-active' : showMobileNav}" >
    <div class="navbar-end">
      <RouterLink to="/" class="navbar-item" active-class="is-active">Notes</RouterLink>
      <RouterLink to="/stats" class="navbar-item" active-class="is-active">Stats</RouterLink>
    </div>
  </div>
</div>
</nav>
</template>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
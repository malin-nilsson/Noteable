<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()

/*
mobile nav 
*/
const showMobileNav = ref(false)
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(
  navbarMenuRef,
  (event) => {
    showMobileNav.value = false
  },
  {
    ignore: [navbarBurgerRef],
  }
)

const logout = () => {
  showMobileNav.value = false
  storeAuth.logoutUser()
}
</script>

<template>
  <nav
    class="navbar is-link"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-sans-serif">Noteable</div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          ref="navbarBurgerRef"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-start">
          <button
            v-if="storeAuth.user.id"
            @click="logout"
            class="button is-small is-lt-purple mt-3 ml-3"
          >
            Log out {{ storeAuth.user.email }}
          </button>
        </div>
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
            >Notes</RouterLink
          >
          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
            >Stats</RouterLink
          >
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

button.is-lt-purple {
  background-color: #d6d6fa;
  color: #000;
  border: none;
}
</style>

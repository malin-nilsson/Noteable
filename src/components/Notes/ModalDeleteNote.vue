<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue';

/*
props
*/
const props = defineProps({
modelValue: {
    type: Boolean,
    default: false
}
})

/*
emits
*/
const emit = defineEmits(['update:modelValue'])

/*
close modal 
*/
const closeModal = () => {
emit('update:modelValue', false)
}


const modalCardRef = ref(null) 

onClickOutside(modalCardRef, closeModal)


</script>

<template>
<div class="modal is-active p-2">
  <div class="modal-background"></div>
  <div 
  class="modal-card"
  ref="modalCardRef">
    <header class="modal-card-head">
      <p class="modal-card-title">Delete note?</p>
      <button class="delete" aria-label="close" @click="closeModal"></button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to delete this note? 
    </section>
    <footer class="modal-card-foot is-justify-content-flex-end">
    <button
    class="button"
    @click="closeModal">
    Cancel
    </button>
      <button class="button is-danger">Delete note</button>
    </footer>
  </div>
</div>
</template>
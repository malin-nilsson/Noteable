<script lang="ts" setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { ref } from 'vue';

const noteContent = ref("")

</script>

<template>
   <div class="edit-note">
   <AddEditNote
   v-model="noteContent"
   bg-color="link"
   placeholder="Edit note..."
   label="Edit note"
   ref="addEditNoteRef">
  <template #buttons>
   <button 
   @click="$router.push('/')"
    class="button is-link has-background-grey-dark mr-2">
      Cancel
    </button>
    <button 
    class="button is-link has-background-link-dark">
      Save Note
    </button>
  </template>
</AddEditNote>
</div>
</template>
<script lang="ts" setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const storeNotes = useStoreNotes()
const noteContent = ref('')
const route = useRoute()
const router = useRouter()

noteContent.value = storeNotes.getNoteContent(route.params.id as string)

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id as string, noteContent.value)
  router.push('/')
}
</script>

<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bg-color="link"
      placeholder="Edit note..."
      label="Edit note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="$router.push('/')"
          class="button is-link has-background-grey-dark mr-2"
        >
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link-dark"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

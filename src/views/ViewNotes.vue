<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()

onMounted(() => {
  storeNotes.getNotes()
})

const newNote = ref('')
const addEditNoteRef = ref<any>()

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value?.focusTextArea()
}
useWatchCharacters(newNote, 250)
</script>

<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new note..."
      label="Add note"
    >
      <template #buttons>
        <button
          @click="addNote"
          class="button is-link has-background-link-dark"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-link"
      max="100"
    />
    <template v-else>
      <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
      />
      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-sans-serif py-6"
      >
        No notes here yet...
      </div>
    </template>
  </div>
</template>
